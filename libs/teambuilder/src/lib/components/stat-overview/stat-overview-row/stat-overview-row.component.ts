import {Component, Input} from '@angular/core';
import {Stat} from "../../../models";
import {COMPARE_STAT_VALUE} from "../../../data";

@Component({
  selector: 'pd-stat-overview-row',
  templateUrl: './stat-overview-row.component.html',
  styleUrls: ['./stat-overview-row.component.scss']
})
export class StatOverviewRowComponent {

  @Input() stat: Stat;

  COMPARE_STAT_VALUE: number = COMPARE_STAT_VALUE;

  constructor() { }

}
