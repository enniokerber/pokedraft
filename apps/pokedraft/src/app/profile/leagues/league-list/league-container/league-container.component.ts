import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeague, PokedraftAuthService, PokedraftLeagueService} from "@pokedraft/core";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";

@Component({
  selector: 'pd-league-container',
  templateUrl: './league-container.component.html',
  styleUrls: ['./league-container.component.scss']
})
export class LeagueContainerComponent implements OnInit {

  @Input() league: IPokedraftLeague;

  @Input() enterable: any;

  logoLoaded: boolean;

  showMore: boolean;

  loading$: Observable<boolean>;

  entered: boolean;

  constructor(private router: Router,
              private auth: PokedraftAuthService,
              private leagueService: PokedraftLeagueService) {
    this.league = null;
    this.enterable = false;
    this.logoLoaded = false;
    this.showMore = false;
    this.loading$ = this.leagueService.loading.asObservable();
    this.entered = (this.league && this.league.users) ? this.league.users.participators.ids.includes(this.auth.getCurrentUsersId()): false;
  }

  ngOnInit(): void {
  }

  toggleMoreInformation(): void {
    this.showMore = !this.showMore;
  }

  setLogoLoaded(): void {
    this.logoLoaded = true;
  }

  toYesNo(bool: boolean): string {
    return bool ? 'yes' : 'no';
  }

  openLeague(id: string): void {
    this.router.navigateByUrl(`league/${id}`);
  }

  enterLeague(): void {
    if (this.league) {
      const leagueId = this.league.id;
      this.leagueService.enterLeague(leagueId)
        .then(_ => {
          console.log('Successfully entered league.');
          this.entered = true;
          this.leagueService.openLeague(leagueId);
        })
        .catch(error => console.warn(error));
    } else {
      console.log('No league => no entering.');
    }
  }

}
