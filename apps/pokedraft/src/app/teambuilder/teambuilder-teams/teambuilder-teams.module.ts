import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeambuilderTeamsRoutingModule } from './teambuilder-teams-routing.module';
import { TeambuilderCoreModule } from '@pokedraft/teambuilder';
import {
  PokedraftComponentsModule,
} from '@pokedraft/material';
import { TeamFormContainerComponent } from './team-form-container/team-form-container.component';
import { FormsModule } from '@angular/forms';
import { TeambuilderTeamsComponent } from './teambuilder-teams.component';
import { TeamPreviewContainerComponent } from './team-preview-container/team-preview-container.component';


@NgModule({
  declarations: [TeambuilderTeamsComponent, TeamFormContainerComponent, TeamPreviewContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    TeambuilderTeamsRoutingModule,
    TeambuilderCoreModule.forChild(),
    PokedraftComponentsModule
  ]
})
export class TeambuilderTeamsModule { }
