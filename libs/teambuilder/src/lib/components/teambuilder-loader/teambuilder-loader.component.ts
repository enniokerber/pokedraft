import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'teambuilder-loader',
  templateUrl: './teambuilder-loader.component.html',
  styleUrls: ['./teambuilder-loader.component.scss']
})
export class TeambuilderLoaderComponent implements OnInit {

  @Input() value = 0;

  @Input() text = 'Loading Pokémon data ...';

  constructor() { }

  ngOnInit() {
  }

}
