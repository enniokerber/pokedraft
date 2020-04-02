import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PokedraftAuthService} from "../auth/pokedraft-auth.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {map, switchMap} from "rxjs/operators";
import {IPokedraftFileSnippet} from "@pokedraft-fire/models";

@Injectable({
  providedIn: 'root'
})
export class PokedraftStorageService {

  files$: Observable<string[]>;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.files$ = this.auth.user$
      .pipe(
        switchMap(({uid}) => this.afs.collection(
          'files',
          ref => ref.where('uid', '==', uid)
          ).valueChanges()
           .pipe(
             map((files: IPokedraftFileSnippet[]) => files.map(file => file.path))
           )
        )
      );
  }
}
