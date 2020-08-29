import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeambuilderTeamsComponent } from './teambuilder-teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeambuilderTeamsComponent
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeambuilderTeamsRoutingModule { }
