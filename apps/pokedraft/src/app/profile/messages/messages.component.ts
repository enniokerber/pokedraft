import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {filter, shareReplay} from "rxjs/operators";
import * as firebase from 'firebase/app';
import {IPokedraftMessage, PokedraftUserService} from "@pokedraft/core";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<IPokedraftMessage[]>;

  constructor(private user: PokedraftUserService) {
    /*
    this.auth.user$
      .pipe(
        filter(user => !!user)
      )
      .subscribe(user => {
        this.afs.collection(`messages`).add(
          {
            from: {
              uid: 'AtKHyRCFERYmTT50E4RN3KZXh8d2',
              name: 'Scotty',
              profile: ''
            },
            to: user.uid,
            content: {
              text: 'Wuff wuff wuff Wuff Wuuuuuuuffff'
            },
            createdAt: firebase.firestore.Timestamp.now()
          }
        ).then(_ => console.log('created message'));
      });
      */
    this.messages$ = this.user.getMessages(20).pipe(shareReplay());
  }

  ngOnInit(): void {
  }

}
