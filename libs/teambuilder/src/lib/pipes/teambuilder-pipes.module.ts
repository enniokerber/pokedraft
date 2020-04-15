import { NgModule } from '@angular/core';
import {TierIsCommonPipe} from "./tierIsCommon/tier-is-common.pipe";
import {TranslateAbilitiesPipe} from "./translateAbilities/translate-abilities.pipe";



@NgModule({
  declarations: [
    TierIsCommonPipe ,
    TranslateAbilitiesPipe
  ],
  exports: [
    TierIsCommonPipe ,
    TranslateAbilitiesPipe
  ]
})
export class TeambuilderPipesModule { }
