import {IStats} from './IStats';
import {Gender} from '../enums/genders';

export interface IPokemon {

  nr: number; // Pokédex Number of the Pokémon
  name: string; // English Name of the Pokémon
  german: string; // German Name of the Pokémon
  imgSrc: string; // Src of the Pokémons icon File in the assets directory
  types: string[]; // Types of the Pokémon
  abilities: string[];
  stats: IStats;
  height: number; // meters
  weight: number; // kg
  tier: string;
  form: string;
  originalSpecies: string;
  requiredGender: string;
  requiredItem: string;

}
