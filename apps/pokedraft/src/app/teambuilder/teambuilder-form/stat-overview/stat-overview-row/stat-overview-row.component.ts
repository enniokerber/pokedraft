import {Component, Input, OnInit} from '@angular/core';
import {Stat} from "@pokedraft/teambuilder";

@Component({
  selector: 'stat-overview-row',
  templateUrl: './stat-overview-row.component.html',
  styleUrls: ['./stat-overview-row.component.scss']
})
export class StatOverviewRowComponent implements OnInit {

  @Input() stat: Stat;

  constructor() { }

  ngOnInit() {
  }

}