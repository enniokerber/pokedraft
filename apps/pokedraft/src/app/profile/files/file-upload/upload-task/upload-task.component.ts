import {Component, Input, OnInit} from '@angular/core';
import {AngularFireUploadTask} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {PokedraftAuthService, PokedraftStorageService} from "@pokedraft/core";
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

  url: string;

  error: string;

  noImage: boolean;

  constructor(private auth: PokedraftAuthService,
              private storage: PokedraftStorageService) {
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

    if (this.file === null) {
      return;
    }

    this.error = '';

    const uid = this.auth.getActiveUsersId();

    if (uid !== null) {

      if (this.file.type.split('/')[0] !== 'image') {
        this.error = 'This file is not an image and thus cannot be uploaded.';
        this.noImage = true;
        return;
      }

      const path = `usercontent/${uid}/${Date.now()}_${this.file.name}`;
      const ref = this.storage.reference(path);

      this.task = this.storage.uploadFile(path, this.file);
      this.task.catch(error => {
        console.log(error);
        this.error = 'Could not upload the file.';
      });
      this.percentage$ = this.task.percentageChanges()
        .pipe(
          finalize(async () => {
            this.url = await ref.getDownloadURL().toPromise();
            this.storage.addFileSnippet({ uid, path: this.url });
          })
        );
    } else {
      this.error = 'You are not authorized to upload files.';
    }

  }

}
