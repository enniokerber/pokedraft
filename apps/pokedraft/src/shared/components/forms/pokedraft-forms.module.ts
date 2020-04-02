import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea/textarea.component';



@NgModule({
  declarations: [
    InputComponent,
    ErrorComponent,
    TextareaComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, ErrorComponent, TextareaComponent]
})
export class PokedraftFormsModule { }
