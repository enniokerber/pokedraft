import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'pd-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss']
})
export class TeambuilderComponent implements OnInit {

  constructor(titleService: Title) {
    titleService.setTitle('Pokédraft - Teambuilder');
  }

  ngOnInit(): void {
  }

}
