import { IPokedraftUserSnippet } from '@pokedraft/core';
import { ITeambuilderTeam, Tiers } from '../api';
import { TeambuilderPokemon, TeambuilderPokemonArray } from './TeambuilderPokemon';

export class TeambuilderTeam {

  id?: string;
  author: IPokedraftUserSnippet;
  name: string;
  createdAt: number;
  lastUpdate: number;
  tier: Tiers;
  public: boolean;
  pokemon: TeambuilderPokemonArray;

  constructor() {
    this.id = null;
    this.author = null;
    this.name = 'Nice Team';
    this.createdAt = null;
    this.lastUpdate = null;
    this.tier = Tiers.UNKNOWN;
    this.public = true;
    this.pokemon = [];
  }

  static forUser(user: IPokedraftUserSnippet): TeambuilderTeam {
    const team = new TeambuilderTeam();
    team.setAuthor(user);
    return team;
  }

  static fromDatabaseRecord(record: ITeambuilderTeam): TeambuilderTeam {
    const team = new TeambuilderTeam();
    team.id = record.id;
    team.author = record.author;
    team.name = record.name;
    team.createdAt = record.createdAt;
    team.lastUpdate = record.lastUpdate;
    team.tier = record.tier;
    team.public = typeof record.public === 'undefined' ? false : record.public;
    return team;
  }

  getPokemon(): TeambuilderPokemonArray { return this.pokemon; }

  setPokemon(pokemon: TeambuilderPokemonArray): void {
    this.pokemon = pokemon || [];
  }

  getId(): string { return this.id; }

  setId(id: string): void { this.id = id; }

  setAuthor(author: IPokedraftUserSnippet): void {
    this.author = author;
  }

  setLastUpdate(): void {
    this.lastUpdate = Date.now();
    if (this.createdAt === null) { this.createdAt = this.lastUpdate; }
  }

  replacePokemon(atIndex: number, newPokemon: TeambuilderPokemon): boolean {
    const count = this.getPokemon().length;
    if (atIndex >= 0 && atIndex < count) {
      const pokemon = this.getPokemon();
      newPokemon.setTeambuilderId(atIndex);
      pokemon[atIndex] = newPokemon;
      return true;
    }
    return false;
  }
}
