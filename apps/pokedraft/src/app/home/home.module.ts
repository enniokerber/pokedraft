import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PokedraftFormsModule } from '../../shared/components/forms/pokedraft-forms.module';
import { PokedraftButtonsModule } from '../../shared/components/buttons/pokedraft-buttons.module';
import { PokedraftUtilsModule } from '../../shared/components/misc/pokedraft-utils.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChooseUsernameComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PokedraftFormsModule,
    PokedraftButtonsModule,
    PokedraftUtilsModule
  ]
})
export class HomeModule { }
