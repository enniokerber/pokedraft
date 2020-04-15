import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PokedraftLeagueService} from "@pokedraft/core";

@Component({
  selector: 'pd-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  @Input() navbarOpen: boolean;

  leagueIdSubscription: Subscription;

  constructor(private actRoute: ActivatedRoute,
              private leagueService: PokedraftLeagueService) {
    this.navbarOpen = true;

    this.leagueIdSubscription = this.actRoute.params
      .subscribe(({ id }) => this.leagueService.switchLeague(id));
  }

  ngOnInit(): void {
  }

  toggleNavbar(newState: boolean): void {
    this.navbarOpen = newState;
  }

}
