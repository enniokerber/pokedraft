import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PokedraftStorageService} from "@pokedraft/core";

@Component({
  selector: 'pd-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files$: Observable<string[]>;

  constructor(private storage: PokedraftStorageService) {
    this.files$ = this.storage.getActiveUsersFiles();
  }

  ngOnInit(): void {
  }

}
