import {Component, Input} from '@angular/core';
import {
  ExtendedStatLabelMap,
  Stats,
  statsExtended,
} from "@pokedraft/teambuilder";

@Component({
  selector: 'stat-overview',
  templateUrl: './stat-overview.component.html',
  styleUrls: ['./stat-overview.component.scss']
})
export class StatOverviewComponent {

  @Input() stats: Stats;

  @Input() set level(level: number) {
    if (typeof level === 'number') {
      this.stats.update(level);
    } else {
      this.stats.update(100);
    }
  }

  statLabels: ExtendedStatLabelMap = statsExtended;

  constructor() {
  }

}
