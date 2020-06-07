import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from "@angular/fire/storage";
import { TrySignInComponent } from './try-sign-in/try-sign-in.component';
import {LayoutModule} from "./layout/layout.module";
import {PokedraftUtilsModule} from "@pokedraft/material";
import {AngularFireFunctionsModule, FUNCTIONS_REGION} from "@angular/fire/functions";

@NgModule({
  declarations: [AppComponent, TrySignInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    LayoutModule,
    PokedraftUtilsModule
  ],
  providers: [
    AngularFirestore,
    Title,
    { provide: FUNCTIONS_REGION, useValue: 'europe-west3'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
