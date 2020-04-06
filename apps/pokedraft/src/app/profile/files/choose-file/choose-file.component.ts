import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {PokedraftStorageService} from "@pokedraft/core";

@Component({
  selector: 'pd-choose-file',
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.scss']
})
export class ChooseFileComponent {

  @Input() show: boolean;

  @Output() choose: EventEmitter<string>; // emits the chosen file url

  @Output() onclose: EventEmitter<any>;

  files$: Observable<string[]>;

  constructor(private storage: PokedraftStorageService) {
    this.show = true;
    this.choose = new EventEmitter<string>();
    this.onclose = new EventEmitter<any>();
    this.files$ = this.storage.getActiveUsersFiles();
  }

  chooseFile(fileUrl: string): void {
    this.choose.emit(fileUrl);
    this.close();
  }

  close(): void {
    this.onclose.emit();
  }

}
