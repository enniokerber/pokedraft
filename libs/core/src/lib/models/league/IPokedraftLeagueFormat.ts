
export enum BattleTypeConstants {
  SINGLES = 'Singles',
  DOUBLES = 'Doubles',
  TRIPLE = 'Tripples',
  OTHER = 'Other'
}

export type BattleType = 'Singles' | 'Doubles' | 'Tripples' | 'Other';

export interface IPokedraftLeagueFormat {
  battleType: BattleType;
  teamPokemon: number;
}
