import { Component } from '@angular/core';
import {HazardStatisticsCalculator, TeambuilderStatisticsService, Hazards} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-hazard-statistics',
  templateUrl: './hazard-statistics.component.html'
})
export class HazardStatisticsComponent {

  public hazardStatistics: HazardStatisticsCalculator;

  public Hazards = Hazards;

  constructor(private tbStatistics: TeambuilderStatisticsService) {
    this.hazardStatistics = this.tbStatistics.getHazardStatistics();
  }

}
