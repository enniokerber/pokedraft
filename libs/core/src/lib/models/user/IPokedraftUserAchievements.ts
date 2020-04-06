import {IPokedraftLeagueAchievement} from "@pokedraft/core";

export interface IPokedraftUserAchievements {
  draftPoints: number;
  titles: IPokedraftLeagueAchievement[];
  leaguesPlayed: number;
}

export const MOCK_POKEDRAFT_USER_ACHIEVEMENTS: IPokedraftUserAchievements = {
  draftPoints: 10,
  titles: [
    {
      name: 'Some Title',
      type: 'gold'
    },
    {
      name: 'Some Title 2',
      type: 'silver',
      leagueId: 'someleagueid',
      leagueName: 'Some League'
    }
  ],
  leaguesPlayed: 5
};
