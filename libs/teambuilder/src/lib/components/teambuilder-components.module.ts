import { NgModule } from '@angular/core';
import {MoveCategoryImageComponent} from "./move-category-image/move-category-image.component";
import {PokemonTypeImageComponent} from "./pokemon-type-image/pokemon-type-image.component";
import {TeambuilderLoaderComponent} from "./teambuilder-loader/teambuilder-loader.component";
import { Translator2Component } from './translator2 (language from service)/translator2.component';
import { Translator3Component } from './translator3 (from ITranslatable)/translator3.component';
import {CommonModule} from "@angular/common";
import { PokemonIconComponent } from './pokemon-icon/pokemon-icon.component';
import { ItemIconComponent } from './item-icon/item-icon.component';
import { NatureDropdownComponent } from './nature-dropdown/nature-dropdown.component';
import { StatOverviewComponent } from './stat-overview/stat-overview.component';
import { StatOverviewRowComponent } from './stat-overview/stat-overview-row/stat-overview-row.component';
import { FormsModule } from '@angular/forms';
import { TeambuilderDirectivesModule } from '../directives/teambuilder-directives.module';
import { MoveInputDummyComponent } from './move-input-dummy/move-input-dummy.component';
import { TeambuilderPipesModule } from '../pipes/teambuilder-pipes.module';
import { NaturalGiftComponent } from './natural-gift/natural-gift.component';

@NgModule({
  declarations: [
    MoveCategoryImageComponent,
    PokemonTypeImageComponent,
    TeambuilderLoaderComponent,
    Translator2Component,
    Translator3Component,
    PokemonIconComponent,
    ItemIconComponent,
    NatureDropdownComponent,
    StatOverviewComponent,
    StatOverviewRowComponent,
    MoveInputDummyComponent,
    NaturalGiftComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeambuilderDirectivesModule,
    TeambuilderPipesModule
  ],
  exports: [
    MoveCategoryImageComponent,
    PokemonTypeImageComponent,
    TeambuilderLoaderComponent,
    Translator2Component,
    Translator3Component,
    PokemonIconComponent,
    ItemIconComponent,
    NatureDropdownComponent,
    StatOverviewComponent,
    StatOverviewRowComponent,
    MoveInputDummyComponent,
    NaturalGiftComponent
  ]
})
export class TeambuilderComponentsModule {
}
