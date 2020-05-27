import { NgModule } from '@angular/core';
import {MoveCategoryImageComponent} from "./move-category-image/move-category-image.component";
import {PokemonTypeImageComponent} from "./pokemon-type-image/pokemon-type-image.component";
import {TeambuilderLoaderComponent} from "./teambuilder-loader/teambuilder-loader.component";
import { Translator2Component } from './translator2 (language from service)/translator2.component';
import { Translator3Component } from './translator3 (from ITranslatable)/translator3.component';
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        MoveCategoryImageComponent,
        PokemonTypeImageComponent,
        TeambuilderLoaderComponent,
        Translator2Component,
        Translator3Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoveCategoryImageComponent,
        PokemonTypeImageComponent,
        TeambuilderLoaderComponent,
        Translator2Component,
        Translator3Component
    ]
})
export class TeambuilderComponentsModule {
}
