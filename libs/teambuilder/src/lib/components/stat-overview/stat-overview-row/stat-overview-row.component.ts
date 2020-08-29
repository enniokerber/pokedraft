import {Component, Input} from '@angular/core';
import {Stat} from "../../../models";

@Component({
  selector: 'pd-stat-overview-row',
  templateUrl: './stat-overview-row.component.html',
  styleUrls: ['./stat-overview-row.component.scss']
})
export class StatOverviewRowComponent {

  @Input() stat: Stat;

  constructor() { }

}
