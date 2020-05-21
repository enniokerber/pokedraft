import {Nature} from './nature';
import {Stats} from './stats';
import {Stat} from './stat';
import {IAbility, IItem, IMove, IPokemon, ITranslatable} from "../api";
import {Genders, GenderType, PokemonType} from "../types";
import {MoveContainer} from "./MoveContainer";

export class TeambuilderPokemon {

  private static regularSpriteURL = 'assets/pokemon/gifs/regular/';
  private static shinySpriteURL = 'assets/pokemon/gifs/shiny/';

  teambuilderPokemonId: number;
  nr: number;
  name: ITranslatable;
  imgSrc: string;
  nickname: string;
  types: PokemonType[];
  level: number;
  happiness: number;
  nature: Nature;
  stats: Stats;
  gender: GenderType;

  shiny: boolean;
  sprite: string;

  item: IItem;
  ability: IAbility;
  possibleAbilities: string[];

  moves: MoveContainer[];

  possibleMoves: IMove[]; // all moves this pokemon can learn are stored after first load

  constructor(pokemon: IPokemon, id: number) {
    this.teambuilderPokemonId = id;
    this.nr = pokemon.nr;
    this.name = pokemon.name;
    this.imgSrc = pokemon.imgSrc;
    this.nickname = '';
    this.types = pokemon.types;
    this.level = 100;
    this.happiness = 255;
    this.nature = new Nature();
    this.stats = new Stats(pokemon.stats, this.nature);
    this.gender = Genders.RANDOM;
    this.shiny = false;
    this.item = null;
    this.ability = null;
    this.possibleAbilities = [];
    this.moves = [new MoveContainer(0), new MoveContainer(1), new MoveContainer(2), new MoveContainer(3)];
    this.possibleMoves = [];
    this.prepare();
  }

  private prepare() {
    this.updateSprite();
    this.stats.applyNature();
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

  getName(): ITranslatable {
    return this.name;
  }

  getItem(): IItem {
    return this.item;
  }

  setItem(item: IItem): void {
    this.item = item;
  }

  getAbility(): IAbility {
    return this.ability;
  }

  setAbility(ability: IAbility): void {
    this.ability = ability;
  }

  updateStats(): void {
    this.stats.update(this.level);
  }

  modifyStats(): void {
    this.stats.modify();
  }

  getNatureId(): number {
    return this.nature.get().id;
  }

  changeNatureById(id: number): void {
    this.nature.setById(id);
    this.stats.applyNature();
  }

  isShiny(): boolean {
    return this.shiny;
  }

  updateSprite() {
    const baseURL = (this.isShiny()) ? TeambuilderPokemon.shinySpriteURL : TeambuilderPokemon.regularSpriteURL;
    this.sprite = baseURL + this.name.english.toLowerCase() + '.gif';
  }
}

