import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentReference} from "@angular/fire/firestore";
import {
  IPokedraftCreateLeagueDTO,
  IPokedraftLeague, IPokedraftLeagueInvitationsDocument,
  IPokedraftMessage,
  IPokedraftUser,
  IPokedraftUserSnippet, toLeagueSnippet, toUserSnippet
} from "../../../models";
import {PokedraftAuthService} from "../../services/auth/pokedraft-auth.service";
import {BehaviorSubject, Observable, of, Subscription, combineLatest} from "rxjs";
import {map, shareReplay, switchMap, tap} from "rxjs/operators";
import * as firebase from 'firebase/app';
import {PokedraftUserService} from "../user/pokedraft-user.service";

@Injectable({
  providedIn: 'root'
})
export class PokedraftLeagueService {

  currentLeague: IPokedraftLeague;
  currentLeagueChanges$: Observable<IPokedraftLeague>;
  leagueSubscription: Subscription;

  currentUserIsAdmin$: Observable<boolean>;

  loading: BehaviorSubject<boolean>;

  constructor(private auth: PokedraftAuthService,
              private userService: PokedraftUserService,
              private afs: AngularFirestore) {
    this.currentLeague = null;
    this.currentLeagueChanges$ = null;
    this.leagueSubscription = Subscription.EMPTY;
    this.loading = new BehaviorSubject<boolean>(false);
    this.currentUserIsAdmin$ = combineLatest([this.auth.user$, this.currentLeagueChanges$])
      .pipe(
        map(([user, league]) => {
          if (!user || !league) {
            return false;
          }
          return league.owner.uid === user.uid;
        })
      );
  }

  getCurrentLeague(): IPokedraftLeague {
    return this.currentLeague;
  }

  getCurrentLeaguesId(): string {
    return this.hasCurrentLeague() && this.currentLeague.id ? this.currentLeague.id : null;
  }

  hasCurrentLeague(): boolean {
    return this.currentLeague !== null;
  }

  get isLoading(): boolean {
    return this.loading.getValue();
  }

  startLoading() {
    this.loading.next(true);
  }

  stopLoading() {
    this.loading.next(false);
  }

  getLeagueReference(id: string): AngularFirestoreDocument<any> {
    return this.afs.doc<IPokedraftLeague>(`leagues/${id}`);
  }

  getUsersLeagues(uid: string): Observable<IPokedraftLeague[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.collection<IPokedraftLeague>(`leagues`,
            ref => ref
              .where('participatorIds', 'array-contains', uid)
              .orderBy('createdAt', 'desc')
          ).valueChanges();
        } else {
          return of([]);
        }
      })
    );
  }

  getCurrentUsersLeagues(): Observable<IPokedraftLeague[]> {
    const uid = this.auth.getCurrentUsersId();
    return this.getUsersLeagues(uid);
  }

  createLeague(createLeagueDTO: IPokedraftCreateLeagueDTO): Promise<DocumentReference> {
    const authedUser = this.auth.getCurrentUser();
    if (!authedUser) {
      console.log('Not authorized: Cannot create League.');
      return;
    }
    const owner: { owner: IPokedraftUserSnippet } = {
      owner: {
        uid: authedUser.uid,
        username: authedUser.username,
        profilePicture: authedUser.profilePicture
      }
    };
    const date = firebase.firestore.Timestamp.now();
    const league: IPokedraftLeague = {
      ...createLeagueDTO,
      ...owner,
      createdAt: date
    };
    const leagueRef = this.afs.collection(`leagues`);
    this.startLoading();
    return leagueRef.add(league)
      .finally(() => this.stopLoading());
  };

  switchLeague(id: string): void {
    if (id === null || id === '') {
      console.log('Did not switch league because the provided id is not valid (null or empty string).');
      return;
    }
    this.currentLeagueChanges$ = this.getLeagueReference(id)
      .valueChanges()
      .pipe(
        tap(league => console.log('Switched League: ', league)),
        shareReplay()
      );
    this.leagueSubscription.unsubscribe();
    this.leagueSubscription = this.currentLeagueChanges$.subscribe(
      (league) => {
        this.currentLeague = league;
      }
    );
  }

  switchOffLeague(): void {
    this.leagueSubscription.unsubscribe();
    this.currentLeagueChanges$ = null;
    this.currentLeague = null;
  }

  async userIsValidToBeInvited(user: IPokedraftUser): Promise<boolean> {
    if (!user) {
      return false;
    }
    const league = this.getCurrentLeague();
    if (!league) {
      return false;
    }

    const alreadyInThatLeague = user.leagues.map(snippet => snippet.id).includes(league.id);
    const invitationRef = this.getLeagueReference(league.id).collection('users').doc<IPokedraftLeagueInvitationsDocument>('invitations');

    const isInvitedUser = await invitationRef
            .get()
            .toPromise()
            .then(doc => {
              const data = doc.data() as IPokedraftLeagueInvitationsDocument;
              return (data && data.invitedUsers && data.invitedUsers.includes(user.uid))
            });

    return isInvitedUser && !alreadyInThatLeague;
  }

  async inviteUser(userToInvite: IPokedraftUser): Promise<void[]> {
    if (!(await this.userIsValidToBeInvited(userToInvite))) {
      console.log('Cannot invite User because either no user has been passed to this function or there is no league currently selected');
      return Promise.reject('user is not valid to be invited');
    }
    const authedUser = this.auth.getCurrentUser();
    if (!authedUser) {
      console.log('Nobody is logged in. Invitation cannot be send.');
      return Promise.reject('Nobody is logged in. Invitation cannot be send.');
    }
    const currentLeague = this.getCurrentLeague();
    const invitation: IPokedraftMessage = {
      id: currentLeague.id,
      from: toUserSnippet(authedUser),
      title: `Invitation to the ${currentLeague.name.long}`,
      message: `Hi ${userToInvite.username}, you have been invited to the ${currentLeague.name.short}!`,
      league: toLeagueSnippet(currentLeague),
      createdAt: firebase.firestore.Timestamp.now()
    };
    this.startLoading();
    return Promise.all([
      this.userService.getInboxReference(userToInvite.uid, currentLeague.id)
        .set(invitation),
      this.getLeagueReference(currentLeague.id)
        .collection('users')
        .doc('invitations')
        .update({
          invitedUsers: firebase.firestore.FieldValue.arrayUnion(userToInvite.uid),
          invitationCount: firebase.firestore.FieldValue.increment(1)
        })
    ])
      .finally(() => this.stopLoading());
  }

  // @return: [updated league participators, updated users leagues, deleted league invitation form users inbox]
  addUserToLeague(leagueId: string): Promise<[void, void, void]> {
    const authedUser = this.auth.getCurrentUser();
    if (!authedUser) {
      return Promise.reject('Nobody is logged in. Cannot enter the league.');
    }
    this.startLoading();
    // add the current user to the league and delete the invitation from the inbox
    return Promise.all([
      this.getLeagueReference(leagueId)
        .collection('users')
        .doc('participators')
        .update({
          participatorIds: firebase.firestore.FieldValue.arrayUnion(authedUser.uid),
          participatorSnippets: firebase.firestore.FieldValue.arrayUnion(toUserSnippet(authedUser)),
          participatorCount: firebase.firestore.FieldValue.increment(1)
        }),
      this.userService.userDocumentReference(authedUser.uid).update({
        leagues: firebase.firestore.FieldValue.arrayUnion(leagueId)
      }),
      this.userService.getInboxReference(authedUser.uid, leagueId).delete(),
    ]).finally(() => this.stopLoading());
  }
}
