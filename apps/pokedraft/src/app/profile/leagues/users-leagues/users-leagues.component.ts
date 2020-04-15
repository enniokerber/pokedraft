import { Component, OnInit } from '@angular/core';
import {IPokedraftLeague} from "@pokedraft/core";
import {Observable} from "rxjs";
import {PokedraftLeagueService} from "@pokedraft/core";

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
