import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokedraftButtonsModule } from '../shared/components/buttons/pokedraft-buttons.module';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    PokedraftButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
