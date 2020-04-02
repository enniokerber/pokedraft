import { Component, OnInit } from '@angular/core';
import {PokedraftAuthService} from "../../../../shared/services/auth/pokedraft-auth.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {delay, map, tap} from "rxjs/operators";
import {IPokedraftFileSnippet} from "@pokedraft-fire/models";

@Component({
  selector: 'pd-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files$: Observable<string[]>;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.files$ = this.afs.collection('files', ref =>
      ref.where('uid', '==', this.auth.getActiveUsersId()))
      .valueChanges()
      .pipe(
        delay(1000),
        tap(res => console.log(res)),
        map((files: IPokedraftFileSnippet[]) => files.map(file => file.path))
      );
  }

  ngOnInit(): void {
  }

}
