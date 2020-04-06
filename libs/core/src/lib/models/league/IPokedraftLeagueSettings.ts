import {BattlePlatformType, IPokedraftLeagueFormat} from "@pokedraft/core";

export interface IPokedraftLeagueSettings {
  general: {
    public: true,
    participators: number;
    format: IPokedraftLeagueFormat;
    platform: BattlePlatformType;
  },
  draft: {
    picks: number;
    mirror: boolean;
    speciesClause: boolean;
  }
}
