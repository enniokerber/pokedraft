import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent, ErrorComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, ErrorComponent]
})
export class PokedraftFormsModule { }
