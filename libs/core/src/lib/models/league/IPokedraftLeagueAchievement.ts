import {PokedraftRewardType} from "@pokedraft/core";

export interface IPokedraftLeagueAchievement {
  name: string;
  type: PokedraftRewardType;
  leagueId?: string;
  leagueName?: string;
}

export const MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT: IPokedraftLeagueAchievement = {
  name: 'Some Achievement',
  type: 'gold'
};

export const MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT_FROM_LEAGUE: IPokedraftLeagueAchievement = {
  name: 'Some League Achievement',
  type: 'bronze',
  leagueId: 'someleagueid',
  leagueName: 'Some League'
};

export const MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT_ARRAY: IPokedraftLeagueAchievement[] = [MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT, MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT_FROM_LEAGUE];
