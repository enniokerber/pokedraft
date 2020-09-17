import { Injectable } from '@angular/core';
import {
  AbilityRecord, GenderType, IAbility, IItem, IMove,
  IPokemon, ITeambuilderPokemon, ItemRecord, ITier, MovesRecord, ShowdownPokemon, ShowdownStringEvaluator,
  TeambuilderEntityCollection, TeambuilderPokemon
} from "../../models";
import {getNatureByName, pokedex, testAbilities, testItems, testMovesObject, TestTiers} from "../../data";

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

  getPokemonByName(name: string): IPokemon {
    if (!name) return null;
    return this.pokemonlist.getAll().find(p => p.name.english === name);
  }

  getAbilities(): IAbility[] {
    return Object.values(this.abilities);
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

  getAbilityByName(name: string): IAbility {
    if (!name) return null;
    return this.getAbilities().find(ability => ability.name.english === name);
  }

  getItems(): IItem[] {
    return Object.values(this.items) as IItem[];
  }

  getItemById(id: string): IItem {
    if (!id) return null;
    return this.items[id];
  }

  getItemByName(name: string): IItem {
    if (!name) return null;
    return this.getItems().find(item => item.name.english === name) || null;
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

  getMoveByName(name: string): IMove {
    if (!name) return null;
    return this.getMoves().find(move => move.name.english === name) || null;
  }

  mapShowdownDataToJSON(data: ShowdownPokemon): ITeambuilderPokemon {
    const id = this.getPokemonByName(data.name)?.id;
    if (!id) { return null }
    const nickname = data.nickname;
    const item = this.getItemByName(data.item)?.id.toString();
    const ability = this.getAbilityByName(data.ability)?.id.toString();
    const gender = data.gender as GenderType;
    const shiny = data.shiny;
    const level = data.level;
    const happiness = data.happiness;
    const evs = data.evs;
    const dvs = data.ivs;
    const nature = getNatureByName(data.nature)?.id;
    const moves = data.moves.map(move => this.getMoveByName(move)?.id.toString()).filter(m => !!m);
    return ({ id, nickname, item, ability, gender, shiny, level, happiness, evs, dvs, nature, moves });
  }

  mapShowdownTeamToPokedraftTeamRecord(showdownData: string): ITeambuilderPokemon[] {
    return showdownData.split('\n\n')
      .filter(pkmn => !!pkmn.trim())
      .map(pkmnString => ShowdownStringEvaluator.evaluate(pkmnString))
      .map((sdPokemonData: ShowdownPokemon) => this.mapShowdownDataToJSON(sdPokemonData))
      .filter(p => !!p);
  }
}
