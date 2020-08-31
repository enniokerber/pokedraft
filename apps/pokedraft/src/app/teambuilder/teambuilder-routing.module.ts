import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeambuilderComponent} from "./teambuilder.component";
import { AuthGuard } from '@pokedraft/core';

const routes: Routes = [
  {
    path: '',
    component: TeambuilderComponent,
    children: [
      {
        path: 'editor',
        loadChildren: () => import('./teambuilder-editor/teambuilder-editor.module').then(m => m.TeambuilderEditorModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('./teambuilder-teams/teambuilder-teams.module').then(m => m.TeambuilderTeamsModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'editor',
        pathMatch: 'full'
      },
      {
        path: '*',
        redirectTo: 'editor',
        pathMatch: 'full'
      }
    ]
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
export class TeambuilderRoutingModule { }
