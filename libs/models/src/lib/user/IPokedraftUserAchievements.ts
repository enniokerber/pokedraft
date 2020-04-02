import {IPokedraftLeagueAchievement} from "@pokedraft-fire/models";

export interface IPokedraftUserAchievements {
  draftPoints: number;
  titles: IPokedraftLeagueAchievement[];
  leaguesPlayed: number;
}
