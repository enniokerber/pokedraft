import {PokemonType} from "../types";

export interface SingleTypeStatistics {
  type: PokemonType;
  counters: number; // how many moves on the team are effective against this type
  hitBy: number; // how many moves on the team hit this type
  resistances: number; // how many types on the team do resist this type
  immunities: number; // how many immunities against this type are on your team
  coverage: CoverageType;
}

export type TypeStatistics = SingleTypeStatistics[];

export type CoverageType = 'bad' | 'mid' | 'good';

export enum CoverageTypes {
  BAD = 'bad',
  MID = 'mid',
  GOOD = 'good'
}

export type TypeStatisticsMap = Record<PokemonType, SingleTypeStatistics>;
