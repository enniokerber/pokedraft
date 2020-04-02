import {IPokedraftLeagueFormat} from "@pokedraft-fire/models";

export interface IPokedraftLeagueSettings {
  general: {
    public: true,
    participators: number;
    format: IPokedraftLeagueFormat;
    platform: string;
  },
  draft: {
    picks: number;
    mirror: boolean;
    speciesClause: boolean;
  }
}
