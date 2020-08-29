import {IStats} from './IStats';
import {PokemonType} from "../types";
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
  requiredGender?: string;
  requiredItem?: string;

}
