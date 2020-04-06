import { NgModule } from '@angular/core';
import {PokedraftButtonsModule} from "./buttons/pokedraft-buttons.module";
import {PokedraftFormsModule} from "./forms/pokedraft-forms.module";
import {PokedraftUtilsModule} from "./utils/pokedraft-utils.module";



@NgModule({
  exports: [
    PokedraftButtonsModule,
    PokedraftFormsModule,
    PokedraftUtilsModule
  ]
})
export class PokedraftComponentsModule { }
