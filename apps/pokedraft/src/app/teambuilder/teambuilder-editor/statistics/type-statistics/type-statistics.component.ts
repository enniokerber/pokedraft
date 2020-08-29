import { Component } from '@angular/core';
import {
  CoverageTypes, TeambuilderPokemonService,
  TeambuilderStatisticsService,
  TypeStatisticsCalculator
} from '@pokedraft/teambuilder';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pd-type-statistics',
  templateUrl: './type-statistics.component.html',
  styleUrls: ['./type-statistics.component.scss']
})
export class TypeStatisticsComponent {

  typeStatistics: TypeStatisticsCalculator;

  teampokemonCount$: Observable<number>;

  coverageTypes = CoverageTypes;

  constructor(private tbStatistics: TeambuilderStatisticsService,
              private tbPokemon: TeambuilderPokemonService) {
    this.typeStatistics = this.tbStatistics.getTypeStatistics();
    this.teampokemonCount$ = this.tbPokemon.currentTeampokemon.changes$
      .pipe(map(team => team.length));
  }

  calc() {
    this.tbStatistics.calculateTypeStatistics();
  }
}
