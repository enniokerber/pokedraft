import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BurgerMenuComponent } from './top-bar/burger-menu/burger-menu.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TopBarComponent,
    BurgerMenuComponent,
    SideNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    TopBarComponent,
    SideNavbarComponent
  ]
})
export class LayoutModule { }
