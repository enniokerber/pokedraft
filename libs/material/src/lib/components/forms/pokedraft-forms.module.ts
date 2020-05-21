import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdInputComponent } from './input/pd-input.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { PdTextareaComponent } from './textarea/pd-textarea.component';
import {PdCheckboxComponent} from "./checkbox/pd-checkbox.component";
import {PdNumberChooserComponent} from "./number-chooser/pd-number-chooser.component";
import {PdNumberChooser2Component} from "./number-chooser2/pd-number-chooser2.component";
import {PdRadioCheckboxComponent} from "./radio-checkbox/pd-radio-checkbox.component";
import {PdDropdownComponent} from "./dropdown/pd-dropdown.component";



@NgModule({
  declarations: [
    PdInputComponent,
    ErrorComponent,
    PdTextareaComponent,
    PdCheckboxComponent,
    PdNumberChooserComponent,
    PdNumberChooser2Component,
    PdRadioCheckboxComponent,
    PdDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PdInputComponent,
    ErrorComponent,
    PdTextareaComponent,
    PdCheckboxComponent,
    PdNumberChooserComponent,
    PdNumberChooser2Component,
    PdRadioCheckboxComponent,
    PdDropdownComponent
  ]
})
export class PokedraftFormsModule { }
