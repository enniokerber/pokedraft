import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeagueSnippet} from "@pokedraft/core";

@Component({
  selector: 'pd-league-snippet-list',
  templateUrl: './league-snippet-list.component.html',
  styleUrls: ['./league-snippet-list.component.scss']
})
export class LeagueSnippetListComponent implements OnInit {

  @Input() leagues: IPokedraftLeagueSnippet[];

  constructor() {
    this.leagues = [];
  }

  ngOnInit(): void {
  }

}
