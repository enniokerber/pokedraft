import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/firestore";
import {IPokedraftCreateLeagueDTO, IPokedraftLeague, IPokedraftUserSnippet} from "@pokedraft-fire/models";
import {PokedraftAuthService} from "../auth/pokedraft-auth.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {shareReplay, tap} from "rxjs/operators";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PokedraftLeagueService {

  league: IPokedraftLeague;
  leagueChanges$: Observable<IPokedraftLeague>;
  leagueSubscription: Subscription;

  loading: BehaviorSubject<boolean>;

  constructor(private afs: AngularFirestore,
              private auth: PokedraftAuthService) {
    this.league = null;
    this.leagueChanges$ = null;
    this.leagueSubscription = Subscription.EMPTY;
    this.loading = new BehaviorSubject<boolean>(false);
  }

  getLeague(): IPokedraftLeague {
    return this.league;
  }

  hasLeague(): boolean {
    return this.league !== null;
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

  createLeague(createLeagueDTO: IPokedraftCreateLeagueDTO): Promise<DocumentReference> {
    const authedUser = this.auth.getActiveUsersData();
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
      users: [owner.owner.uid],
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
    this.leagueChanges$ = this.afs.doc<IPokedraftLeague>(`leagues/${id}`)
      .valueChanges()
      .pipe(
        tap(league => console.log('Switched League: ', league)),
        shareReplay()
      );
    this.leagueSubscription.unsubscribe();
    this.leagueSubscription = this.leagueChanges$.subscribe(
      (league) => {
        this.league = league;
      }
    );
  }

  switchOffLeague(): void {
    this.leagueSubscription.unsubscribe();
    this.leagueChanges$ = null;
    this.league = null;
  }
}
