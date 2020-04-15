import { NgModule } from '@angular/core';
import {TranslatableDirective} from "./translatable/translatable.directive";
import {TranslatableTitleDirective} from "./translatable-title/translatable-title.directive";


@NgModule({
  declarations: [
    TranslatableDirective,
    TranslatableTitleDirective
  ],
  exports: [
    TranslatableDirective,
    TranslatableTitleDirective
  ]
})
export class TeambuilderDirectivesModule { }
