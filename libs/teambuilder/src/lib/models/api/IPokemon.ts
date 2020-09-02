import {IStats} from './IStats';
import { GenderType, PokemonType } from '../types';
import {ITranslatable} from "./ITranslatable";

export interface IPokemon {
  id: string;
  name: ITranslatable;
  types: PokemonType[]; // Types of the Pokémon
  abilities: string[];
  stats: IStats;
  weight: number; // kg
  tier: string;
  moves: string[];
  form?: string;
  originalSpecies?: string;
  requiredGender?: GenderType;
  requiredItem?: string;

}
