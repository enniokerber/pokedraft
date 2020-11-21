import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeambuilderComponent} from "./teambuilder.component";
import { AuthGuard } from '@pokedraft/core';
import { EntityResolver } from '@pokedraft/teambuilder';
import { TeambuilderGateComponent } from './teambuilder-gate/teambuilder-gate.component';

const routes: Routes = [
  {
    path: '',
    component: TeambuilderComponent,
    children: [
      {
        path: 'gate',
        component: TeambuilderGateComponent
      },
      {
        path: 'editor',
        loadChildren: () => import('./teambuilder-editor/teambuilder-editor.module').then(m => m.TeambuilderEditorModule),
        resolve: {
          entities: EntityResolver
        }
      },
      {
        path: 'teams',
        loadChildren: () => import('./teambuilder-teams/teambuilder-teams.module').then(m => m.TeambuilderTeamsModule),
        canActivate: [AuthGuard],
        resolve: {
          entities: EntityResolver
        }
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
