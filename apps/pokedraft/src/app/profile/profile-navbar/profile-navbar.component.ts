import {Component, Input, NgZone} from '@angular/core';
import {PokedraftAuthService} from '@pokedraft/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pd-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent {

  @Input() open: boolean;

  navigatingToTeambuilder: boolean;

  constructor(private auth: PokedraftAuthService,
              private router: Router,
              private ngZone: NgZone) {
    this.open = false;
    this.navigatingToTeambuilder = false;
  }

  signOut(): void {
    this.auth.signOut()
      .finally(() => this.ngZone.run(() => this.router.navigateByUrl('home/login')));
  }

  navigateToTeambuilder() {
    this.navigatingToTeambuilder = true;
    this.router.navigateByUrl('teambuilder/editor').finally(() => this.navigatingToTeambuilder = false);
  }

}
