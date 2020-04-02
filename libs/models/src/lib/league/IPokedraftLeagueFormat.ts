
export enum BattleType {
  SINGLES = 'Singles',
  DOUBLES = 'Doubles',
  TRIPLE = 'Tripples',
  OTHER = 'Other'
}

export interface IPokedraftLeagueFormat {
  battleType: BattleType;
  teamPokemon: number;
}
