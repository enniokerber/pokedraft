import { Component } from '@angular/core';
import {shareReplay} from "rxjs/operators";
import {IPokedraftMessage, PokedraftUserService} from "@pokedraft/core";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  messages$: Observable<IPokedraftMessage[]>;

  constructor(private user: PokedraftUserService) {
    this.messages$ = this.user.getMessages(20).pipe(shareReplay());
  }

}
