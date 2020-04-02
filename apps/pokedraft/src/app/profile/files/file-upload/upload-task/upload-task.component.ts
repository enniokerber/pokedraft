import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {PokedraftAuthService} from "../../../../../shared/services/auth/pokedraft-auth.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pd-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage$: Observable<number>;

  url: Observable<string>;

  error: string;

  noImage: boolean;

  constructor(private storage: AngularFireStorage,
              private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.file = null;
    this.task = null;
    this.percentage$ = null;
    this.url = null;
    this.error = '';
    this.noImage = false;
  }

  ngOnInit(): void {
    this.uploadFile();
  }

  uploadFile(): void {
    this.error = '';

    if (this.auth.getActiveUsersId() !== null) {

      if (this.file.type.split('/')[0] !== 'image') {
        this.error = 'This file is not an image and thus cannot be uploaded.';
        this.noImage = true;
        return;
      }

      const path = `usercontent/${this.auth.getActiveUsersId()}/${Date.now()}_${this.file.name}`;
      const ref = this.storage.ref(path);

      this.task = this.storage.upload(path, this.file);
      this.task.catch(error => {
        console.log(error);
        this.error = 'Could not upload the file.';
      });
      this.percentage$ = this.task.percentageChanges()
        .pipe(
          finalize(async () => {
            this.url = await ref.getDownloadURL().toPromise();
            this.afs.collection('files').add({ uid: this.auth.getActiveUsersId(), path: this.url });
          })
        );
    } else {
      this.error = 'You are not authorized to upload files.';
    }

  }

}
