import { Component, Input } from '@angular/core';
import { TeambuilderPokemon } from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-team-form-container',
  templateUrl: './team-form-container.component.html',
  styleUrls: ['./team-form-container.component.scss']
})
export class TeamFormContainerComponent {

  @Input() pokemon: TeambuilderPokemon;

  constructor() {
    this.pokemon = null;
  }

}
