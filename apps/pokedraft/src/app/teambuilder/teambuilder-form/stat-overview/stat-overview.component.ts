import {Component, Input} from '@angular/core';
import {ExtendedStatLabelMap, statIdsArray, Stats, statsExtended} from "@pokedraft/teambuilder";

@Component({
  selector: 'stat-overview',
  templateUrl: './stat-overview.component.html',
  styleUrls: ['./stat-overview.component.scss']
})
export class StatOverviewComponent {

  @Input() stats: Stats;

  statLabels: ExtendedStatLabelMap;

  statsIds: string[];

  constructor() {
    this.stats = null;
    this.statLabels = statsExtended;
    this.statsIds = statIdsArray;
  }

}
