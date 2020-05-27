import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeambuilderRoutingModule } from './teambuilder-routing.module';
import { TeambuilderComponent } from './teambuilder.component';
import {TeambuilderCoreModule} from "@pokedraft/teambuilder";
import {AbilitiesListComponent} from "./abilities-list/abilities-list.component";
import {MovesListComponent} from "./moves-list/moves-list.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {TeambarComponent} from "./teambar/teambar.component";
import {TeambuilderFrameComponent} from "./teambuilder-frame/teambuilder-frame.component";
import {TeambuilderFormComponent} from "./teambuilder-form/teambuilder-form.component";
import {TeambuilderSettingsBarComponent} from "./teambuilder-settings-bar/teambuilder-settings-bar.component";
import {PokedraftFormsModule, PokedraftUtilsModule} from "@pokedraft/material";
import {FormsModule} from "@angular/forms";
import {MovesListRowContainerComponent} from "./moves-list/moves-list-row-container/moves-list-row-container.component";
import {PokemonListRowContainerComponent} from "./pokemon-list/pokemon-list-row-container/pokemon-list-row-container.component";
import {MoveInputComponent} from "./teambuilder-form/move-input/move-input.component";
import {StatOverviewComponent} from "./teambuilder-form/stat-overview/stat-overview.component";
import {StatOverviewRowComponent} from "./teambuilder-form/stat-overview/stat-overview-row/stat-overview-row.component";
import { ItemListComponent } from './item-list/item-list.component';
import { NatureDropdownComponent } from './teambuilder-form/nature-dropdown/nature-dropdown.component';
import { SearchItemInputComponent } from './teambuilder-form/search-item-input/search-item-input.component';
import { SearchAbilityInputComponent } from './teambuilder-form/search-ability-input/search-ability-input.component';
import { ItemListRowContainerComponent } from './item-list/item-list-row-container/item-list-row-container.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    TeambuilderComponent,
    AbilitiesListComponent,
    MovesListComponent,
    MovesListRowContainerComponent,
    PokemonListComponent,
    PokemonListRowContainerComponent,
    TeambarComponent,
    TeambuilderFrameComponent,
    TeambuilderFormComponent,
    MoveInputComponent,
    StatOverviewComponent,
    StatOverviewRowComponent,
    TeambuilderSettingsBarComponent,
    ItemListComponent,
    NatureDropdownComponent,
    SearchItemInputComponent,
    SearchAbilityInputComponent,
    ItemListRowContainerComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeambuilderRoutingModule,
    TeambuilderCoreModule,
    PokedraftFormsModule,
    PokedraftUtilsModule
  ]
})
export class TeambuilderModule { }
