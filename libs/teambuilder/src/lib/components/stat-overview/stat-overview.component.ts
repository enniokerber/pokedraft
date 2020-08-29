import {Component, Input} from '@angular/core';
import {ExtendedStatLabelMap, statIdsArray, statsExtended} from "../../data";
import { Stats } from '../../models';

@Component({
  selector: 'pd-stat-overview',
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
