import { ITranslatable } from '@pokedraft/teambuilder';

export interface SingleItemCountStatistics {
  name: ITranslatable;
  imgSrc: string;
  count: number;
  holders: SingleItemCountPokemonSnippet[];
}

export interface SingleItemCountItemSnippet {
  name: ITranslatable;
  imgSrc: string;
}

export interface SingleItemCountPokemonSnippet {
  id: string;
  name: ITranslatable;
}

export type ItemClauseStatistics = SingleItemCountStatistics[];

export type ItemClauseStatisticsMap = Record<string, SingleItemCountStatistics>;
