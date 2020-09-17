import { PartialStats } from './IStats';
import { GenderType } from '../types';

export interface ITeambuilderPokemon {
  id: string;
  nickname?: string;
  level?: number;
  happiness?: number;
  nature?: number;
  gender?: GenderType;
  shiny?: boolean;
  item?: string;
  ability?: string;
  moves?: string[];
  evs?: PartialStats;
  dvs?: PartialStats;
}
