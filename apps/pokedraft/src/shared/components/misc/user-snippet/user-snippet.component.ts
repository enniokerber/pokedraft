import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftUser, IPokedraftUserSnippet} from "@pokedraft-fire/models";

@Component({
  selector: 'pd-user-snippet',
  templateUrl: './user-snippet.component.html',
  styleUrls: ['./user-snippet.component.scss']
})
export class UserSnippetComponent implements OnInit {

  @Input() user: IPokedraftUser | IPokedraftUserSnippet;

  constructor() {
    this.user = null;
  }

  ngOnInit(): void {
  }

}
