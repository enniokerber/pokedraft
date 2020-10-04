import {Component, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'pd-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeambuilderComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Pokédraft - Teambuilder');
  }
}
