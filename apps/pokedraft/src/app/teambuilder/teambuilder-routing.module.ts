import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeambuilderComponent} from "./teambuilder.component";


const routes: Routes = [
  {
    path: '',
    component: TeambuilderComponent,
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeambuilderRoutingModule { }
