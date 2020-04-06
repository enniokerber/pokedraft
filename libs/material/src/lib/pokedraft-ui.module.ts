import { NgModule } from '@angular/core';
import {PokedraftComponentsModule} from "./components/pokedraft-components.module";
import {PokedraftDirectivesModule} from "./directives/pokedraft-directives.module";


@NgModule({
  exports: [
    PokedraftComponentsModule,
    PokedraftDirectivesModule
  ]
})
export class PokedraftUIModule {}
