import { NgModule } from '@angular/core';
import {TierIsCommonPipe} from "./tierIsCommon/tier-is-common.pipe";
import {FindAbilityNamePipe} from "./findAbilityName/find-ability-name.pipe";
import {TierFilterPipe} from "./tierFilter/tier-filter.pipe";
import { GenderPipe } from './gender/gender.pipe';
import { TranslatePipe } from './translate/translate.pipe';



@NgModule({
  declarations: [
    TierIsCommonPipe ,
    FindAbilityNamePipe,
    TierFilterPipe,
    GenderPipe,
    TranslatePipe
  ],
  exports: [
    TierIsCommonPipe ,
    FindAbilityNamePipe,
    TierFilterPipe,
    GenderPipe,
    TranslatePipe
  ]
})
export class TeambuilderPipesModule { }
