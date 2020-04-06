import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeagueAchievement} from "@pokedraft/core";

@Component({
  selector: 'pd-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  @Input() achievements: IPokedraftLeagueAchievement[];

  constructor() {
    this.achievements = [];
  }

  ngOnInit(): void {
  }

}
