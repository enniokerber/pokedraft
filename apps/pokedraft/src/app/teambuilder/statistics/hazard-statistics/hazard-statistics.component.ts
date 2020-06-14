import { Component } from '@angular/core';
import {HazardStatisticsCalculator, TeambuilderStatisticsService} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-hazard-statistics',
  templateUrl: './hazard-statistics.component.html'
})
export class HazardStatisticsComponent {

  hazardStatistics: HazardStatisticsCalculator;

  constructor(private tbStatistics: TeambuilderStatisticsService) {
    this.hazardStatistics = this.tbStatistics.getHazardStatistics();
  }

}
