import {Component, Input} from '@angular/core';

@Component({
  selector: 'pd-teambuilder-loader',
  templateUrl: './teambuilder-loader.component.html',
  styleUrls: ['./teambuilder-loader.component.scss']
})
export class TeambuilderLoaderComponent {

  @Input() value = 0;

  @Input() text = 'Loading Pokémon data ...';

  constructor() { }

}
