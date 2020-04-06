import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorageModule} from "@angular/fire/storage";
import { TrySignInComponent } from './try-sign-in/try-sign-in.component';
import {LayoutModule} from "./layout/layout.module";
import {PokedraftUtilsModule} from "@pokedraft/material";

@NgModule({
  declarations: [AppComponent, TrySignInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    LayoutModule,
    PokedraftUtilsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
