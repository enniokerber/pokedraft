import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IPokedraftUser } from '@pokedraft-fire/models';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedraftAuthService {

  activeUsersId: string;
  user$: Observable<IPokedraftUser>;

  loading: BehaviorSubject<boolean>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.activeUsersId = null;
    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user !== null) {
            this.activeUsersId = user.uid;
            return this.afs.doc<IPokedraftUser>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
    this.loading = new BehaviorSubject<boolean>(false);
  }

  isLoading(): boolean {
    return this.loading.getValue();
  }

  startLoading() {
    this.loading.next(true);
  }

  stopLoading() {
    this.loading.next(false);
  }

  login(email: string, password: string): Promise<string> {
    this.startLoading();
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(credentials => this.activeUsersId = credentials.user.uid)
      .finally(() => this.stopLoading());
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  emailSignUp(email: string, password: string): Promise<string> {
    this.startLoading();
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(credentials => this.activeUsersId = credentials.user.uid)
      .finally(() => this.stopLoading());
  }

  updateUsername(username: string): Promise<void> {
    this.startLoading();
    return this.afs.doc(`users/${this.activeUsersId}`).update({ username })
      .finally(() => this.stopLoading());
  }
}
