import {PokedraftRewardType} from "@pokedraft-fire/models";

export interface IPokedraftLeagueAchievement {
  name: string;
  type: PokedraftRewardType;
  leagueId?: string;
  leagueName?: string;
}
