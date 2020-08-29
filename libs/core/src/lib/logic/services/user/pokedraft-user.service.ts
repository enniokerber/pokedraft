import { Injectable } from '@angular/core';
import {IPokedraftMessage, IPokedraftUser} from "@pokedraft/core";
import {PokedraftAuthService} from "../auth/pokedraft-auth.service";
import {Observable, of} from "rxjs";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import { allWithDocumentId } from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class PokedraftUserService {

  user: IPokedraftUser;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.user = auth.currentUser;
  }

  userDocumentReference(id: string): AngularFirestoreDocument {
    return this.afs.doc(`users/${id}`);
  }

  getUserById(id: string): Observable<IPokedraftUser> {
    return this.userDocumentReference(id)
      .get()
      .pipe(
        map(snapshot => snapshot.data() as IPokedraftUser)
      );
  }

  getUserByName(username: string): Observable<IPokedraftUser[]> {
    return this.afs.collection<IPokedraftUser>('users', ref =>
      ref.where('username', '==', username)
    ).get()
      .pipe(
        map(snapshot => snapshot.docs.map(
          doc => doc.data() as IPokedraftUser
          )
        )
      );
  }

  getMessages(limit: number = 20): Observable<IPokedraftMessage[]> {
    if (this.auth.userIsSignedIn()) {
      return this.afs.collection<IPokedraftMessage>(`users/${this.auth.getCurrentUsersId()}/inbox`,
        ref =>
          ref.orderBy('createdAt', 'desc')
             .limit(limit)
      )
        .snapshotChanges()
        .pipe(allWithDocumentId) // TODO: test
    } else {
      return of([]);
    }
  }

  getInboxReference(uid: string, messageId: string): AngularFirestoreDocument<IPokedraftMessage> {
    return this.afs.doc<IPokedraftMessage>(`users/${uid}/inbox/${messageId}`);
  }
}
