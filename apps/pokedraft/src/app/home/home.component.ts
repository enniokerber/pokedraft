import { Component, OnInit } from '@angular/core';
import { routerAnimation } from '@pokedraft/material';
import { RouterOutlet } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'pd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    routerAnimation
  ]
})
export class HomeComponent implements OnInit {

  constructor(titleService: Title) {
    titleService.setTitle('Pokédraft');
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
