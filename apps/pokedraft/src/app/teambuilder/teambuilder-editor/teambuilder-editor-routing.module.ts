import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeambuilderEditorComponent } from './teambuilder-editor.component';
import { TeamResolver } from '@pokedraft/teambuilder';


const routes: Routes = [
  {
    path: '',
    component: TeambuilderEditorComponent
  },
  {
    path: ':teamid',
    component: TeambuilderEditorComponent,
    resolve: {
      team: TeamResolver
    }
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
export class TeambuilderEditorRoutingModule { }
