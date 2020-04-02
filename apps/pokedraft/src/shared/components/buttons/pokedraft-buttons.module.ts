import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RoundButtonComponent } from './round-button/round-button.component';
import {PokedraftUtilsModule} from "../misc/pokedraft-utils.module";


@NgModule({
  declarations: [ButtonComponent, RoundButtonComponent],
  imports: [CommonModule, PokedraftUtilsModule],
  exports: [ButtonComponent, RoundButtonComponent]
})
export class PokedraftButtonsModule { }
