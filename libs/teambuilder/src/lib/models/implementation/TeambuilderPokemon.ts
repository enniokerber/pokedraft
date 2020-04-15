import {Nature} from './nature';
import {Stats} from './stats';
import {Stat} from './stat';
import {Gender} from '../enums/genders';

import {IPokemon} from '../api/IPokemon';
import {DEFAULT_NATURE, natures} from '../../../data/teambuilder/natures';
import {INature} from '../api/INature';
import {IMove} from '../api/IMove';

export class TeambuilderPokemon {

  private static regularSpriteURL = 'assets/pokemon/gifs/regular/';
  private static shinySpriteURL = 'assets/pokemon/gifs/shiny/';

  teambuilderPokemonId: number;
  nr: number;
  name: string;
  germanName: string;
  imgSrc: string;
  nickname: string;
  types: string[];
  level: number;
  happiness: number;
  nature: Nature;
  stats: Stats;
  gender: Gender;

  shiny: boolean;
  sprite: string;

  item: string;
  ability: string;
  possibleAbilities: string[];

  moves: IMove[];

  currentNature: string;

  constructor(pokemon: IPokemon, id: number) {
    this.teambuilderPokemonId = id;
    this.nr = pokemon.nr;
    this.name = pokemon.name;
    this.germanName = pokemon.german;
    this.imgSrc = pokemon.imgSrc;
    this.nickname = '';
    this.types = pokemon.types;
    this.level = 100;
    this.happiness = 255;
    this.nature = new Nature(DEFAULT_NATURE);
    this.stats = new Stats(pokemon.stats);
    this.gender = Gender.RANDOM;
    this.shiny = false;
    this.ability = '';
    this.possibleAbilities = [];
    this.moves = [null, null, null, null];
    this.initialize();
  }

  initialize() {
    this.updateSprite();
    this.changeNature(DEFAULT_NATURE);
  }

  get hp(): Stat {
    return this.stats.hp;
  }

  get atk(): Stat {
    return this.stats.atk;
  }

  get def(): Stat {
    return this.stats.def;
  }

  get spatk(): Stat {
    return this.stats.spatk;
  }

  get spdef(): Stat {
    return this.stats.spdef;
  }

  get speed(): Stat {
    return this.stats.speed;
  }

  getCurrentHp(): number {
    return this.stats.hp.modifiedValue;
  }

  getCurrentAtk(): number {
    return this.stats.atk.modifiedValue;
  }

  getCurrentDef(): number {
    return this.stats.def.modifiedValue;
  }

  getCurrentSpAtk(): number {
    return this.stats.spatk.modifiedValue;
  }

  getCurrentSpDef(): number {
    return this.stats.spdef.modifiedValue;
  }

  getCurrentSpeed(): number {
    return this.stats.speed.modifiedValue;
  }

  updateStats(): void {
    this.stats.update(this.level);
  }

  modifyStats(): void {
    this.stats.modify();
  }

  changeNature(nature: INature): void {
    this.currentNature = nature.name;
    this.nature.change(nature);
    this.stats.applyNature(this.nature.getValue());
  }

  changeNatureFromCurrentlySelected() {
    const nature = natures.find(n => n.name === this.currentNature);
    this.changeNature(nature);
  }

  isShiny(): boolean {
    return this.shiny;
  }

  updateSprite() {
    const baseURL = (this.isShiny()) ? TeambuilderPokemon.shinySpriteURL : TeambuilderPokemon.regularSpriteURL;
    this.sprite = baseURL + this.name.toLowerCase() + '.gif';
  }
}

