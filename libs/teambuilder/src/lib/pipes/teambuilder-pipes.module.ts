import { NgModule } from '@angular/core';
import {TierIsCommonPipe} from "./tierIsCommon/tier-is-common.pipe";
import {FindAbilityNamePipe} from "./findAbilityName/find-ability-name.pipe";
import {TierFilterPipe} from "./tierFilter/tier-filter.pipe";



@NgModule({
  declarations: [
    TierIsCommonPipe ,
    FindAbilityNamePipe,
    TierFilterPipe
  ],
  exports: [
    TierIsCommonPipe ,
    FindAbilityNamePipe,
    TierFilterPipe
  ]
})
export class TeambuilderPipesModule { }
