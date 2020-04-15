import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftUser, PokedraftAuthService, PokedraftLeagueService} from "@pokedraft/core";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'pd-league-top-bar',
  templateUrl: './league-top-bar.component.html',
  styleUrls: ['./league-top-bar.component.scss']
})
export class LeagueTopBarComponent implements OnInit {

  @Input() navbarOpen: boolean;

  currentUser$: Observable<IPokedraftUser>;

  currentLeagueName$: Observable<string>;

  constructor(private auth: PokedraftAuthService,
              private leagueService: PokedraftLeagueService) {
    this.navbarOpen = false;
    this.currentUser$ = this.auth.user$;
    this.currentLeagueName$ = this.leagueService.currentLeagueChanges$
      .pipe(
        filter(league => !!league),
        map(({ name }) => name.long)
      )
  }

  ngOnInit(): void {
  }

}
