import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeague, IPokedraftLeagueSnippet} from "@pokedraft-fire/models";

@Component({
  selector: 'pd-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {

  @Input() leagues: IPokedraftLeague[];

  constructor() {
    this.leagues = [];
  }

  ngOnInit(): void {
  }

}
