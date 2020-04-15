import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import {ProfileModule} from "./profile/profile.module";
import {AuthGuard} from "@pokedraft/core";
import {TrySignInComponent} from "./try-sign-in/try-sign-in.component";
import {LeagueModule} from "./league/league.module";

const routes: Route[] = [
  {
    path: 'gate',
    component: TrySignInComponent
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'profile',
    loadChildren: () => ProfileModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'league/:id',
    loadChildren: () => LeagueModule
  },
  {
    path: '',
    redirectTo: 'gate',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'gate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
