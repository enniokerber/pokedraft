import {Component, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'pd-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeambuilderComponent {

  constructor(titleService: Title) {
    titleService.setTitle('Pokédraft - Teambuilder');
  }

}
