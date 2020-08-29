import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeambuilderRoutingModule } from './teambuilder-routing.module';
import { TeambuilderCoreModule } from '@pokedraft/teambuilder';
import { PokedraftButtonsModule, PokedraftFormsModule, PokedraftUtilsModule } from '@pokedraft/material';
import { TeambuilderComponent } from './teambuilder.component';

@NgModule({
  declarations: [
    TeambuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeambuilderRoutingModule,
    TeambuilderCoreModule.forRoot(),
    PokedraftFormsModule,
    PokedraftUtilsModule,
    PokedraftButtonsModule
  ]
})
export class TeambuilderModule { }
