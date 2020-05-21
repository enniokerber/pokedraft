import { Injectable } from '@angular/core';
import {IAbility, IMove, IPokemon, ITier, TeambuilderEntityCollection} from "../../models";
import {pokedex, TestTiers} from "../../data";

@Injectable()
export class TeambuilderStoreService {

  private readonly _pokemonlist: TeambuilderEntityCollection<IPokemon>;
  private _abilities: IAbility[];
  private readonly _moves: TeambuilderEntityCollection<IMove>;
  private _types: any[];
  private _tiers: ITier[];

  constructor() {
    this._pokemonlist = new TeambuilderEntityCollection<IPokemon>(pokedex);
    this._abilities = [];
    this._moves = new TeambuilderEntityCollection<IMove>([]);
    this._types = [];
    this._tiers = TestTiers;
  }

  get pokemonlist(): TeambuilderEntityCollection<IPokemon> {
    return this._pokemonlist;
  }

  get abilities(): IAbility[] {
    return this._abilities;
  }

  set abilities(value: IAbility[]) {
    this._abilities = value;
  }

  get moves(): TeambuilderEntityCollection<IMove> {
    return this._moves;
  }

  get types(): any[] {
    return this._types;
  }

  set types(value: any[]) {
    this._types = value;
  }

  get tiers(): ITier[] {
    return this._tiers;
  }

  set tiers(value: ITier[]) {
    this._tiers = value;
  }


  sortPokemon(property: string, parentProperty = ''): void {
    this.pokemonlist.sort(property, parentProperty);
  }

  sortPokemonIfNotSorted(by: string, parentProperty = ''): void {
    if (this.pokemonlist.sortColumn !== by) {
      this.pokemonlist.sort(by, parentProperty);
    }
  }
}
