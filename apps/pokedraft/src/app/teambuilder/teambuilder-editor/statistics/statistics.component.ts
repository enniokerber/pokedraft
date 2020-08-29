import { Component } from '@angular/core';
import {TeambuilderStatisticsService} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  constructor(public tbStatistics: TeambuilderStatisticsService) {
  }

  calculateStatistics() { this.tbStatistics.updateAllStatistics(); }
}
