import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PokedraftAuthService} from "../auth/pokedraft-auth.service";
import {AngularFirestore, DocumentReference} from "@angular/fire/firestore";
import {map, switchMap} from "rxjs/operators";
import {IPokedraftFileSnippet} from "@pokedraft/core";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class PokedraftStorageService {

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore,
              private afStorage: AngularFireStorage) {
  }

  getActiveUsersFiles(): Observable<string[]> {
    return this.auth.user$
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

  reference(path: string): AngularFireStorageReference {
    return this.afStorage.ref(path);
  }

  uploadFile(path: string, file: File): AngularFireUploadTask {
    return this.afStorage.upload(path, file);
  }

  addFileSnippet(file: IPokedraftFileSnippet): Promise<DocumentReference> {
    return this.afs.collection('files').add(file);
  }
}
