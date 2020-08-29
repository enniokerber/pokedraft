import { IPokedraftUserSnippet } from '@pokedraft/core';
import { ITeambuilderTeam, Tiers } from '../api';
import { TeambuilderPokemonArray } from './TeambuilderPokemon';

export class TeambuilderTeam {

  id?: string;
  author: IPokedraftUserSnippet;
  name: string;
  createdAt: number;
  lastUpdate: number;
  tier: Tiers;
  public: boolean;
  pokemon: TeambuilderPokemonArray;

  constructor(record: ITeambuilderTeam) {
    this.id = record.id;
    this.author = record.author;
    this.name = record.name;
    this.createdAt = record.createdAt;
    this.tier = record.tier;
    this.public = typeof record.public === 'undefined' ? false : record.public;
    this.pokemon = [];
  }

  getPokemon(): TeambuilderPokemonArray { return this.pokemon; }

  setPokemon(pokemon: TeambuilderPokemonArray): void {
    this.pokemon = pokemon || [];
  }

  getId(): string { return this.id; }

}
