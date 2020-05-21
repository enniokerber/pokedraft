import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  INature,
  natureStats, neutralNatures,
  statAffectingNatures,
  StatWithLabel, TeambuilderPokemon
} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-nature-dropdown',
  templateUrl: './nature-dropdown.component.html',
  styleUrls: ['./nature-dropdown.component.scss']
})
export class NatureDropdownComponent implements OnInit {

  @Input() set pokemon(pokemon: TeambuilderPokemon) {
    if (pokemon) {
      this.selectedNatureId = pokemon.getNatureId();
    }
  };

  @Output() natureChange: EventEmitter<number>;

  selectedNatureId: number;

  statAffectingNatures: INature[] = statAffectingNatures;
  neutralNatures: INature[] = neutralNatures;
  stats: StatWithLabel[] = natureStats;

  constructor() {
    this.selectedNatureId = 0;
    this.natureChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  changeNature(id: number) {
    this.natureChange.emit(id);
  }

}
