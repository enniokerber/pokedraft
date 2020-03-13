import { Component, OnInit } from '@angular/core';
import { routerAnimations } from '../../shared/animations/router.animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    routerAnimations
  ]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
