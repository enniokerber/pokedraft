import { NgModule } from '@angular/core';
import {TranslatableTitleDirective} from "./translatable-title/translatable-title.directive";
import {TranslatableTitle2Directive} from "./translatable-title2 (from ITranslatable)/translatable-title2.directive";


@NgModule({
  declarations: [
    TranslatableTitleDirective,
    TranslatableTitle2Directive
  ],
  exports: [
    TranslatableTitleDirective,
    TranslatableTitle2Directive
  ]
})
export class TeambuilderDirectivesModule { }
