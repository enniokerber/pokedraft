import {PokemonTypes} from "../types";

export const FOUR_TIMES_SUPER_EFFECTIVE = 4;
export const SUPER_EFFECTIVE = 2;
export const NEUTRAL = 1;
export const RESISTED = .5;
export const DOUBLE_RESISTED = .25;
export const IMMUNE = 0;

export interface TypeDefinition {
  atk: TypeToNumberMap; // effectiveness if a pokemon with this type attack another pokemon
  def: TypeToNumberMap; // effectiveness if a pokemon with this type gets attacked by another pokemons move
}

export type TypeChart = Partial<Record<PokemonTypes, TypeDefinition>>;

export type TypeToNumberMap = Partial<Record<PokemonTypes, number>>;
