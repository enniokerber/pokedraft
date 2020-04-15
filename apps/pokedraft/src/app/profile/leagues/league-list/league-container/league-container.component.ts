import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeague, PokedraftAuthService, PokedraftLeagueService} from "@pokedraft/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-league-container',
  templateUrl: './league-container.component.html',
  styleUrls: ['./league-container.component.scss']
})
export class LeagueContainerComponent implements OnInit {

  @Input() league: IPokedraftLeague;

  @Input() enterable: any;

  uid: string;

  logoLoaded: boolean;

  showMore: boolean;

  loading$: Observable<boolean>;

  constructor(private router: Router,
              private auth: PokedraftAuthService,
              private leagueService: PokedraftLeagueService) {
    this.league = null;
    this.enterable = true;
    this.logoLoaded = false;
    this.showMore = false;
    this.uid = this.auth.getCurrentUsersId();
    this.loading$ = this.leagueService.loading.asObservable();
  }

  ngOnInit(): void {
  }

  get isParticipator(): boolean {
    return this.league.owner.uid === this.uid || (this.league.participatorIds && this.league.participatorIds.includes(this.uid));
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
    this.uid = this.auth.getCurrentUsersId();
    if (this.league && this.enterable && !this.isParticipator) {
      this.leagueService.addUserToLeague(this.league.id)
        .then(() => console.log('Enter league'))
        .catch(error => console.log('Could not enter league'));
    } else {
      console.log('Cannot trigger the addUserToLeague function because if returns false');
    }
  }

}
