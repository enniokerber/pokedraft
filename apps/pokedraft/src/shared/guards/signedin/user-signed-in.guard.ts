import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PokedraftAuthService } from '../../services/auth/pokedraft-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserSignedInGuard implements CanActivate {

  constructor(private auth: PokedraftAuthService,
              private router: Router) {}

  canActivate(): boolean {
    if (this.auth.activeUsersId !== null) {
      return true;
    } else {
      this.router.navigateByUrl(`home/login`)
        .then(() => console.log('No user signed in, so you cannot pick a username. You were redirected to the login page.'));
      return false;
    }
  }
  
}
