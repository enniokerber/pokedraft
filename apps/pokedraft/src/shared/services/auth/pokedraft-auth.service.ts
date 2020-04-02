import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import { IPokedraftUser } from '@pokedraft-fire/models';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {shareReplay, switchMap, tap} from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class PokedraftAuthService implements OnDestroy {

  activeUsersData: IPokedraftUser;

  auth$: Observable<IPokedraftUser>; // used to check the auth state
  user$: Observable<IPokedraftUser>; // used to share the current user

  private userSubscription: Subscription;

  loading: BehaviorSubject<boolean>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.activeUsersData = null;
    this.auth$ = this.afAuth.authState
      .pipe(switchMap(user => {
          if (user !== null) {
            return this.afs.doc<IPokedraftUser>(`users/${user.uid}`)
              .valueChanges();
          } else {
            console.log('Nobody signed in');
            return of(null);
          }
        }));
    this.user$ = this.auth$.pipe(
      tap(userdoc => console.log('User: ', userdoc)),
      shareReplay()
    );
    this.userSubscription = this.auth$.subscribe(user => {
      this.activeUsersData = user;
    });
    this.loading = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
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

  getActiveUsersId(): string {
    return this.activeUsersData ? this.activeUsersData.uid : null;
  }

  getActiveUsersData(): IPokedraftUser {
    return this.activeUsersData;
  }

  login(email: string, password: string): Promise<UserCredential> {
    this.startLoading();
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .finally(() => this.stopLoading());
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  emailSignUp(email: string, password: string): Promise<UserCredential> {
    this.startLoading();
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .finally(() => this.stopLoading());
  }

  updateUsername(username: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.getActiveUsersId()}`).update({ username })
      .finally(() => this.stopLoading());
  }

  updateProfileDescription(profileDescription: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.getActiveUsersId()}`).update({ profileDescription })
      .finally(() => this.stopLoading());
  }

  updateProfilePicture(profilePicture: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.getActiveUsersId()}`).update({ profilePicture })
      .finally(() => this.stopLoading());
  }
}
