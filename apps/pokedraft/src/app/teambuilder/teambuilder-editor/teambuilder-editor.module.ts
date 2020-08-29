import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeambuilderEditorRoutingModule } from './teambuilder-editor-routing.module';
import { TeambuilderCoreModule } from '@pokedraft/teambuilder';
import { PokedraftButtonsModule, PokedraftFormsModule, PokedraftUtilsModule } from '@pokedraft/material';
import { FormsModule } from '@angular/forms';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { MovesListComponent } from './moves-list/moves-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MovesListRowContainerComponent } from './moves-list/moves-list-row-container/moves-list-row-container.component';
import { PokemonListRowContainerComponent } from './pokemon-list/pokemon-list-row-container/pokemon-list-row-container.component';
import { TeambarComponent } from './teambar/teambar.component';
import { MoveInputComponent } from './teambuilder-form/move-input/move-input.component';
import { TeambuilderFormComponent } from './teambuilder-form/teambuilder-form.component';
import { TeambuilderSettingsBarComponent } from './teambuilder-settings-bar/teambuilder-settings-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchItemInputComponent } from './teambuilder-form/search-item-input/search-item-input.component';
import { SearchAbilityInputComponent } from './teambuilder-form/search-ability-input/search-ability-input.component';
import { ItemListRowContainerComponent } from './item-list/item-list-row-container/item-list-row-container.component';
import { StatsComponent } from './stats/stats.component';
import { SingleStatComponent } from './stats/single-stat/single-stat.component';
import { TypeStatisticsComponent } from './statistics/type-statistics/type-statistics.component';
import { EvInputComponent } from './stats/single-stat/ev-input/ev-input.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HazardStatisticsComponent } from './statistics/hazard-statistics/hazard-statistics.component';
import { DvInputComponent } from './stats/single-stat/dv-input/dv-input.component';
import { ItemClauseStatisticsComponent } from './statistics/item-clause-statistics/item-clause-statistics.component';
import { TeambuilderEditorComponent } from './teambuilder-editor.component';


@NgModule({
  declarations: [
    AbilitiesListComponent,
    MovesListComponent,
    MovesListRowContainerComponent,
    PokemonListComponent,
    PokemonListRowContainerComponent,
    TeambarComponent,
    TeambuilderFormComponent,
    MoveInputComponent,
    TeambuilderSettingsBarComponent,
    ItemListComponent,
    SearchItemInputComponent,
    SearchAbilityInputComponent,
    ItemListRowContainerComponent,
    StatsComponent,
    SingleStatComponent,
    EvInputComponent,
    StatisticsComponent,
    TypeStatisticsComponent,
    HazardStatisticsComponent,
    DvInputComponent,
    ItemClauseStatisticsComponent,
    TeambuilderEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeambuilderEditorRoutingModule,
    TeambuilderCoreModule.forChild(),
    PokedraftFormsModule,
    PokedraftUtilsModule,
    PokedraftButtonsModule
  ]
})
export class TeambuilderEditorModule { }
