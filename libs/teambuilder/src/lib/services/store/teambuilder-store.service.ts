import { Injectable } from '@angular/core';
import {
  AbilityRecord, IAbility, IItem, IMove,
  IPokemon, ItemRecord, ITier, MovesRecord,
  TeambuilderEntityCollection, TeambuilderPokemon
} from "../../models";
import {pokedex, testAbilities, testItems, testMovesObject, TestTiers} from "../../data";

@Injectable()
export class TeambuilderStoreService {

  private readonly _pokemonlist: TeambuilderEntityCollection<IPokemon>;
  private readonly _abilities: AbilityRecord;
  private readonly _items: ItemRecord;
  private readonly _moves: MovesRecord;
  private readonly _tiers: ITier[];

  constructor() {
    this._pokemonlist = new TeambuilderEntityCollection<IPokemon>(pokedex as IPokemon[]);
    this._abilities = testAbilities;
    this._items = testItems;
    this._moves = testMovesObject;
    this._tiers = TestTiers;
  }

  get pokemonlist(): TeambuilderEntityCollection<IPokemon> {
    return this._pokemonlist;
  }

  get abilities(): AbilityRecord {
    return this._abilities;
  }

  get items(): ItemRecord {
    return this._items;
  }

  get moves(): MovesRecord {
    return this._moves;
  }

  get tiers(): ITier[] {
    return this._tiers;
  }

  getPokemonById(id: string): IPokemon {
    if (!id) return null;
    return this.pokemonlist.getAll().find(p => p.id === id) || null;
  }

  getPokemonsAbilities(pokemon: TeambuilderPokemon) {
    if (!this.abilities || !pokemon) {
      return [];
    }
    return pokemon.getPossibleAbilities()
      .map(id => this.getAbilityById(id));
  }

  getAbilityById(id: string): IAbility {
    if (!id) return null;
    return this.abilities[id];
  }

  getItems(): IItem[] {
    return Object.values(this.items) as IItem[];
  }

  getItemById(id: string): IItem {
    if (!id) return null;
    return this.items[id];
  }

  getMoves(): IMove[] {
    return Object.values(this.moves) as IMove[];
  }

  getMovesByIds(ids: string[]): IMove[] {
    if (!ids || ids.length === 0) return [];
    return ids.map(id => this.getMoveById(id) || null);
  }

  getMoveById(id: string): IMove {
    if (!id) return null;
    return this.moves[id];
  }
}
