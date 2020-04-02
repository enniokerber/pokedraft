import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeague, IPokedraftLeagueSnippet} from "@pokedraft-fire/models";
import {PokedraftAuthService} from "../../../../../shared/services/auth/pokedraft-auth.service";

@Component({
  selector: 'pd-league-container',
  templateUrl: './league-container.component.html',
  styleUrls: ['./league-container.component.scss']
})
export class LeagueContainerComponent implements OnInit {

  @Input() league: IPokedraftLeague;

  @Input() enterable: any = true;

  uid: string;

  logoLoaded: boolean;

  showMore: boolean;

  constructor(auth: PokedraftAuthService) {
    this.league = null;
    this.logoLoaded = false;
    this.showMore = false;
    this.uid = auth.getActiveUsersId();
  }

  ngOnInit(): void {
  }

  get isParticipator(): boolean {
    return this.league.owner.uid === this.uid || (this.league.users && this.league.users.includes(this.uid));
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

}
