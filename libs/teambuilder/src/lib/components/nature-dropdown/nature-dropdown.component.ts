import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  INature,
  StatWithLabel, TeambuilderPokemon
} from '../../models';
import {
  natureStats, neutralNatures,
  statAffectingNatures
} from '../../data';

@Component({
  selector: 'pd-nature-dropdown',
  templateUrl: './nature-dropdown.component.html',
  styleUrls: ['./nature-dropdown.component.scss']
})
export class NatureDropdownComponent {

  @Input() set pokemon(pokemon: TeambuilderPokemon) {
    if (pokemon) {
      this.selectedNatureId = pokemon.getNatureId();
    }
    this._pokemon = pokemon;
  };

  @Input() disabled: any;

  @Output() natureChange: EventEmitter<number>;

  _pokemon: TeambuilderPokemon;

  selectedNatureId: number;

  statAffectingNatures: INature[] = statAffectingNatures;
  neutralNatures: INature[] = neutralNatures;
  stats: StatWithLabel[] = natureStats;

  constructor() {
    this.selectedNatureId = 0;
    this.natureChange = new EventEmitter<number>();
    this.disabled = false;
  }

  changeNature(id: number): void {
    this._pokemon.changeNatureById(id);
    this.natureChange.emit(id);
  }

}
