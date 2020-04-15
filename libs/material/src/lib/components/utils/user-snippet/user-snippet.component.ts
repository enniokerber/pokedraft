import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftUser, IPokedraftUserSnippet} from "@pokedraft/core";

@Component({
  selector: 'pd-user-snippet',
  templateUrl: './user-snippet.component.html',
  styleUrls: ['./user-snippet.component.scss']
})
export class UserSnippetComponent implements OnInit {

  @Input() user: IPokedraftUser | IPokedraftUserSnippet;

  @Input() frame: any;

  constructor() {
    this.user = null;
    this.frame = false;
  }

  ngOnInit(): void {
  }

}
