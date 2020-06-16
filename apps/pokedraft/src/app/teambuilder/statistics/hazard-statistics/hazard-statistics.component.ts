import { Component } from '@angular/core';
import {HazardStatisticsCalculator, TeambuilderStatisticsService, Hazards} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-hazard-statistics',
  templateUrl: './hazard-statistics.component.html'
})
export class HazardStatisticsComponent {

  hazardStatistics: HazardStatisticsCalculator;

  Hazards = Hazards;

  constructor(private tbStatistics: TeambuilderStatisticsService) {
    this.hazardStatistics = this.tbStatistics.getHazardStatistics();
  }

}
