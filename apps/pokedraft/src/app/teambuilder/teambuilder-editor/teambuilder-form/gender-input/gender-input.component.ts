import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genders, gendersWithLabels, GenderType, IGender, TeambuilderPokemon } from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.scss']
})
export class GenderInputComponent {

  @Input() set pokemon(pokemon: TeambuilderPokemon) {
    this._pokemon = pokemon;
    if (pokemon.requiresGender()) {
      this.genders = gendersWithLabels.filter(gender => gender.id === pokemon.getRequiredGender());
    } else {
      this.genders = gendersWithLabels.filter(gender => gender.id !== Genders.NEUTRAL);
    }
  };

  @Output() genderChange: EventEmitter<GenderType>;

  _pokemon: TeambuilderPokemon;

  genders: IGender[];

  constructor() {
    this._pokemon = null;
    this.genders = [];
    this.genderChange = new EventEmitter<GenderType>();
  }

  changeGender(): void {
    this.genderChange.emit(this._pokemon.getGender());
  }
}
