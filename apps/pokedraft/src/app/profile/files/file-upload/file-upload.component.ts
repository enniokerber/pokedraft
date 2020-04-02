import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  files: File[];

  hovering: boolean;

  constructor() {
    this.files = [];
    this.hovering = false;
  }

  ngOnInit(): void {
  }

  setHoveringState(to: boolean): void {
    this.hovering = to;
  }

  uploadFiles(files: FileList): void {
    for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
      this.files.push(files.item(fileIndex));
    }
  }

}
