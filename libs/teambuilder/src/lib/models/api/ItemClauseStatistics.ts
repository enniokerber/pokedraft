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
  name: ITranslatable;
  imgSrc: string;
}

export type ItemClauseStatistics = SingleItemCountStatistics[];

export type ItemClauseStatisticsMap = Record<string, SingleItemCountStatistics>;
