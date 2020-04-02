import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {PokedraftAuthService} from "../../services/auth/pokedraft-auth.service";
import {delay, map, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: PokedraftAuthService,
              private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.auth$
      .pipe(
        take(1),
        map(user => !!user),
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            console.log('AuthGuard: You are not authorized for this page. Navigate to login.');
            this.router.navigateByUrl('home/login');
          }
        })
      );
  }
  
}
