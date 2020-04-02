import { Injectable } from '@angular/core';
import {IPokedraftMessage, IPokedraftUser} from "@pokedraft-fire/models";
import {PokedraftAuthService} from "../auth/pokedraft-auth.service";
import {Observable, of, pipe} from "rxjs";
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {snapshotChangesToDocsWithId, snapshotChangesToDocsWithIdOperator} from "../../functions/functions";

@Injectable({
  providedIn: 'root'
})
export class PokedraftUserService {

  user: IPokedraftUser;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.user = auth.activeUsersData;
  }

  userIsSet(): boolean {
    return !!this.user;
  }

  getMessages(limit: number = 20): Observable<IPokedraftMessage[]> {
    if (this.userIsSet()) {
      return this.afs.collection<IPokedraftMessage>(`messages`,
        ref =>
          ref.where('to', '==', this.user.uid)
            .orderBy('createdAt', 'desc')
            .limit(limit)
      )
        .snapshotChanges()
        .pipe(map(snapshotChangesToDocsWithId))
    } else {
      return of([]);
    }
  }
}
