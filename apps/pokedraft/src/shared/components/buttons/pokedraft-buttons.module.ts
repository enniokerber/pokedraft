import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MatRippleModule } from '@angular/material/core/ripple';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [ButtonComponent]
})
export class PokedraftButtonsModule { }
