import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeagueAchievement} from "@pokedraft-fire/models";

@Component({
  selector: 'pd-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  @Input() achievement: IPokedraftLeagueAchievement;

  constructor() {
    this.achievement = null;
  }

  ngOnInit(): void {
  }

}
