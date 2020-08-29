import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentReference} from "@angular/fire/firestore";
import {
  constructLeague,
  IPokedraftCreateLeagueDTO,
  IPokedraftLeague, IPokedraftLeagueParticipatorsDocument,
} from "../../../models";
import {PokedraftAuthService} from "../../services/auth/pokedraft-auth.service";
import {BehaviorSubject, Observable, of, Subscription, combineLatest} from "rxjs";
import {map, shareReplay, switchMap, tap} from "rxjs/operators";
import {PokedraftUserService} from "../user/pokedraft-user.service";
import {AngularFireFunctions} from "@angular/fire/functions";
import HttpsCallableResult = firebase.functions.HttpsCallableResult;
import {Router} from "@angular/router";

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
              private afs: AngularFirestore,
              private afFunc: AngularFireFunctions,
              private router: Router) {
    this.currentLeague = null;
    this.currentLeagueChanges$ = null;
    this.leagueSubscription = Subscription.EMPTY;
    this.loading = new BehaviorSubject<boolean>(false);
    this.currentUserIsAdmin$ = this.currentUserIsAdmin();
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

  openLeague(id: string): Promise<boolean> {
    return this.router.navigateByUrl(`league/${id}`);
  }

  private currentUserIsAdmin(): Observable<boolean> {
    return combineLatest([this.auth.user$, this.currentLeagueChanges$])
      .pipe(
        map(([user, league]) => {
          if (!user || !league) {
            return false;
          }
          return league.owner.uid === user.uid;
        }),
        shareReplay()
      );
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
              .where('users.participators.ids', 'array-contains', uid)
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

  getLeagueParticipators(leagueId: string): Observable<IPokedraftLeagueParticipatorsDocument> {
    return this.getLeagueReference(leagueId).collection('users').doc('participators')
      .valueChanges();
  }

  getCurrentLeaguesParticipatorDocument(): Observable<IPokedraftLeagueParticipatorsDocument> {
    const leagueId = this.getCurrentLeaguesId();
    if (!leagueId) {
      return of({
        participatorIds: [],
        participatorSnippets: [],
        participatorCount: 0
      } as IPokedraftLeagueParticipatorsDocument);
    }
    return this.getLeagueParticipators(leagueId);
  }

  createLeague(createLeagueDTO: IPokedraftCreateLeagueDTO): Promise<DocumentReference> {
    const authedUser = this.auth.getCurrentUser();
    if (!authedUser) {
      console.log('Not authorized: Cannot create League.');
      return;
    }

    const league = constructLeague(createLeagueDTO, authedUser);

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

  inviteUser(uid: string): Promise<HttpsCallableResult> {
    const authedUsersId = this.auth.getCurrentUsersId();
    if (!authedUsersId) {
      return Promise.reject('Unauthorized');
    }

    const leagueId = this.getCurrentLeaguesId();
    if (!leagueId) {
      return Promise.reject('No active league');
    }
    this.startLoading();
    const invitationFunction = this.afFunc.functions.httpsCallable('inviteUserToLeague');
    return invitationFunction({ uid, leagueId })
      .finally(() => this.stopLoading());
  }

  userValidToBeInvited(uid: string): boolean {
    const league = this.getCurrentLeague();

    if (!league) {
      return false;
    }

    if (league.owner && league.owner.uid === uid) {
      return false;
    }

    if (league.users && league.users.participators &&
      league.users.participators.ids.includes(uid)) {
      return false;
    }

    return true;
  }

  enterLeague(id: string): Promise<HttpsCallableResult> {

    const currentUser = this.auth.getCurrentUser();
    if (!currentUser) {
      return Promise.reject('Unauthorized');
    }

    this.startLoading();
    const enterFunction = this.afFunc.functions.httpsCallable('enterLeague');
    return enterFunction({ leagueId: id })
      .finally(() => this.stopLoading());
  }
}
