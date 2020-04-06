import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';
import {PokedraftUIModule} from "@pokedraft/material";


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
    PokedraftUIModule
  ]
})
export class HomeModule { }
