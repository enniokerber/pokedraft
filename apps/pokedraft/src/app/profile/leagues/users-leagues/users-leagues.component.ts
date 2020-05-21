import { Component, OnInit } from '@angular/core';
import {IPokedraftLeague, PokedraftLeagueService} from "@pokedraft/core";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-users-leagues',
  templateUrl: './users-leagues.component.html',
  styleUrls: ['./users-leagues.component.scss']
})
export class UsersLeaguesComponent implements OnInit {

  leagues$: Observable<IPokedraftLeague[]>;

  constructor(private leagueService: PokedraftLeagueService) {
    this.leagues$ = this.leagueService.getCurrentUsersLeagues();
  }

  ngOnInit(): void {
  }

}
