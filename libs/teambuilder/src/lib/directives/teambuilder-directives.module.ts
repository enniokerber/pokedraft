import { NgModule } from '@angular/core';
import {TranslatableTitleDirective} from "./translatable-title/translatable-title.directive";
import {TranslatableTitle2Directive} from "./translatable-title2 (from ITranslatable)/translatable-title2.directive";
import { TranslateAttributeDirective } from './translate-attribute/translate-attribute.directive';


@NgModule({
  declarations: [
    TranslatableTitleDirective,
    TranslatableTitle2Directive,
    TranslateAttributeDirective
  ],
  exports: [
    TranslatableTitleDirective,
    TranslatableTitle2Directive,
    TranslateAttributeDirective
  ]
})
export class TeambuilderDirectivesModule { }
