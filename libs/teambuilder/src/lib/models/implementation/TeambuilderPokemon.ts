import {Nature} from './nature';
import {Stats} from './Stats';
import {IAbility, IItem, IMove, IPokemon, ITranslatable} from "../api";
import {Genders, GenderType, PokemonType} from "../types";
import {Container, generateContainer} from "./Container";
import {MAX_HAPPINESS, MAX_LEVEL} from "../../data";

export type TeambuilderPokemonArray = TeambuilderPokemon[];

export class TeambuilderPokemon {

  private static regularSpriteURL = 'assets/pokemon/gifs/regular/';
  private static shinySpriteURL = 'assets/pokemon/gifs/shiny/';

  teambuilderPokemonId: number;
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

  moves: Container<IMove>[];

  possibleMoves: string[]; // all moves this pokemon can learn are stored after initial load

  // if moves are filled (all 4) the first time, stats component opens automatically
  // if moves are focused and changed afterwards that does not happen again,
  // so moves can easily be added without always switching to stats
  movesFilled: boolean;

  constructor(pokemon: IPokemon, id: number) {
    this.teambuilderPokemonId = id;
    this.name = pokemon.name;
    this.imgSrc = pokemon.imgSrc;
    this.nickname = '';
    this.types = pokemon.types;
    this.level = MAX_LEVEL;
    this.happiness = MAX_HAPPINESS;
    this.nature = new Nature();
    this.stats = new Stats(pokemon.stats, this.nature);
    this.gender = Genders.RANDOM;
    this.shiny = false;
    this.item = null;
    this.ability = null;
    this.possibleAbilities = pokemon.abilities;
    this.moves = generateContainer<IMove>(4);
    this.possibleMoves = pokemon.moves;
    this.movesFilled = false;
    this.prepare();
  }

  private prepare() {
    this.updateSprite();
  }

  getTeambuilderId(): number {
    return this.teambuilderPokemonId;
  }

  setTeambuilderId(value: number): void {
    this.teambuilderPokemonId = value;
  }

  getName(): ITranslatable {
    return this.name;
  }

  getTypes(): PokemonType[] { return this.types; }

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

  getPossibleAbilities(): string[] {
    return this.possibleAbilities;
  }

  getMoves(): IMove[] {
    return this.moves.map(mc => mc.getData()).filter(m => !!m);
  }

  getPossibleMoves(): string[] {
    return this.possibleMoves;
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
    this.sprite = baseURL + this.getImgSrcWithoutDataEnding() + '.gif';
  }

  private getImgSrcWithoutDataEnding() {
    return (this.imgSrc.slice(0, this.imgSrc.length - 4));
  }

  movesWereFilled() {
    return this.movesFilled;
  }

  markMovesFilled() {
    this.movesFilled = true;
  }
}

