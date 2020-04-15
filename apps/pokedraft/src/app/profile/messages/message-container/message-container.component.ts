import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftMessage} from "@pokedraft/core";

@Component({
  selector: 'pd-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  @Input() message: IPokedraftMessage;

  constructor() {
    this.message = null;
  }

  ngOnInit(): void {
  }

  get isLeagueInvitation(): boolean { return typeof this.message.league !== 'undefined'; }

  get isRewardMessage(): boolean { return typeof this.message.reward !== 'undefined'; }

}
