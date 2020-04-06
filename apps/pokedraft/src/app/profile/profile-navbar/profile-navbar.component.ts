import {Component, Input, NgZone, OnInit} from '@angular/core';
import {PokedraftAuthService} from "../../../../../../libs/core/src/lib/logic/services/auth/pokedraft-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'pd-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent implements OnInit {

  @Input() open: boolean;

  constructor(private auth: PokedraftAuthService,
              private router: Router,
              private ngZone: NgZone) {
    this.open = false;
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this.auth.signOut()
      .finally(() => this.ngZone.run(() => this.router.navigateByUrl('home/login')));
  }

}
