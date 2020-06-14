import { Component } from '@angular/core';
import {
  ExtendedStatLabelMap, MAX_EVS_TOTAL,
  statIdsArray, statsExtended,
  TeambuilderPokemon,
  TeambuilderPokemonService,
  StatConfig, statConfigs
} from "@pokedraft/teambuilder";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  readonly selectedPokemon$: Observable<TeambuilderPokemon>;

  readonly statIds: string[];

  readonly statLabels: ExtendedStatLabelMap;

  readonly statConfigs: StatConfig[];

  readonly MAX_EVS: number;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.selectedPokemon$ = this.tbPokemon.selectedTeampokemon.changes$;
    this.statIds = statIdsArray;
    this.statLabels = statsExtended;
    this.statConfigs = statConfigs;
    this.MAX_EVS = MAX_EVS_TOTAL;
  }

}
