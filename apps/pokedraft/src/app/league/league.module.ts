import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './league.component';
import { LeagueNavbarComponent } from './league-navbar/league-navbar.component';
import {LayoutModule} from "../layout/layout.module";
import { LeagueTopBarComponent } from './league-top-bar/league-top-bar.component';
import {PokedraftUIModule} from "@pokedraft/material";
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { LeagueInvitationsComponent } from './league-teams/league-invitations/league-invitations.component';


@NgModule({
  declarations: [LeagueComponent, LeagueNavbarComponent, LeagueTopBarComponent, LeagueTeamsComponent, LeagueInvitationsComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    LayoutModule,
    PokedraftUIModule
  ]
})
export class LeagueModule { }
