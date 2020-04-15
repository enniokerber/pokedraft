import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeagueTeamsComponent} from "./league-teams/league-teams.component";
import {LeagueComponent} from "./league.component";
import {LeagueInvitationsComponent} from "./league-teams/league-invitations/league-invitations.component";


const routes: Routes = [
  {
    path: '',
    component: LeagueComponent,
    children: [
      {
        path: 'teams',
        component: LeagueTeamsComponent,
        children: [
          {
            path: 'invite',
            component: LeagueInvitationsComponent
          },
          {
            path: '',
            redirectTo: 'invite',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'teams',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
