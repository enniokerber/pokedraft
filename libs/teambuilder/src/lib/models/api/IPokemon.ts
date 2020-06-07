import {IStats} from './IStats';
import {PokemonType} from "../types";
import {ITranslatable} from "./ITranslatable";

export interface IPokemon {

  name: ITranslatable;
  imgSrc: string; // Src of the Pokémons icon File in the assets directory
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
