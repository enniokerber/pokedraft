import { Component } from '@angular/core';
import { ItemClauseStatisticsCalculator, TeambuilderStatisticsService } from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-item-clause-statistics',
  templateUrl: './item-clause-statistics.component.html',
  styleUrls: ['./item-clause-statistics.component.scss']
})
export class ItemClauseStatisticsComponent {

  itemClauseStatistics: ItemClauseStatisticsCalculator;

  constructor(private tbStatistics: TeambuilderStatisticsService) {
    this.itemClauseStatistics = this.tbStatistics.getItemClauseStatistics();
  }

  calc() {
    this.tbStatistics.calculateItemClauseStatistics();
  }
}
