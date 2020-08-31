import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import { IPokedraftUser, IPokedraftUserSnippet, toUserSnippet } from '../../../models';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {shareReplay, switchMap, tap} from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class PokedraftAuthService implements OnDestroy {

  currentUser: IPokedraftUser;

  auth$: Observable<IPokedraftUser>; // used to check the auth state
  user$: Observable<IPokedraftUser>; // used to share the current user

  private userSubscription: Subscription;

  loading: BehaviorSubject<boolean>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.currentUser = null;
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
      this.currentUser = user;
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

  userIsSignedIn(): boolean {
    return !!this.currentUser;
  }

  getCurrentUsersId(): string {
    return this.currentUser ? this.currentUser.uid : null;
  }

  getCurrentUser(): IPokedraftUser {
    return this.currentUser;
  }

  getCurrentUserSnippet(): IPokedraftUserSnippet {
    const user = this.getCurrentUser();
    return user ? toUserSnippet(user) : null;
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
    return this.afs.doc(`users/${this.getCurrentUsersId()}`).update({ username })
      .finally(() => this.stopLoading());
  }

  updateProfileDescription(profileDescription: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.getCurrentUsersId()}`).update({ profileDescription })
      .finally(() => this.stopLoading());
  }

  updateProfilePicture(profilePicture: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.getCurrentUsersId()}`).update({ profilePicture })
      .finally(() => this.stopLoading());
  }
}
