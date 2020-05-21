import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AuthGuard} from "@pokedraft/core";
import {TrySignInComponent} from "./try-sign-in/try-sign-in.component";

const routes: Route[] = [
  {
    path: 'gate',
    component: TrySignInComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'league/:id',
    loadChildren: () => import('./league/league.module').then(m => m.LeagueModule),
  },
  {
    path: 'teambuilder',
    loadChildren: () => import('./teambuilder/teambuilder.module').then(m => m.TeambuilderModule),
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
