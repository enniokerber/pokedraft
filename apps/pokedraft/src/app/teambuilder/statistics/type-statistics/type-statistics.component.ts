import { Component } from '@angular/core';
import {
  CoverageTypes,
  TeambuilderStatisticsService,
  TypeStatisticsCalculator
} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-type-statistics',
  templateUrl: './type-statistics.component.html',
  styleUrls: ['./type-statistics.component.scss']
})
export class TypeStatisticsComponent {

  typeStatistics: TypeStatisticsCalculator;

  coverageTypes = CoverageTypes;

  constructor(private tbStatistics: TeambuilderStatisticsService) {
    this.typeStatistics = this.tbStatistics.getTypeStatistics();
  }

  calc() {
    this.tbStatistics.calculateTypeStatistics();
  }
}
