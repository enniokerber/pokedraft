import { NgModule } from '@angular/core';
import {TierIsCommonPipe} from "./tierIsCommon/tier-is-common.pipe";
import {TranslateAbilitiesPipe} from "./translateAbilities/translate-abilities.pipe";
import {TierFilterPipe} from "./tierFilter/tier-filter.pipe";



@NgModule({
  declarations: [
    TierIsCommonPipe ,
    TranslateAbilitiesPipe,
    TierFilterPipe
  ],
  exports: [
    TierIsCommonPipe ,
    TranslateAbilitiesPipe,
    TierFilterPipe
  ]
})
export class TeambuilderPipesModule { }
