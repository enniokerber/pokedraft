import {Nature} from './nature';
import {Stats} from './Stats';
import { IAbility, IItem, IMove, IPokemon, ITeambuilderPokemon, ITranslatable } from '../api';
import {Genders, GenderType, PokemonType} from "../types";
import {Container, generateContainer} from "./Container";
import { DEFAULT_NATURE, MAX_HAPPINESS, MAX_LEVEL, MAX_MOVESET_SIZE } from '../../data';

export type TeambuilderPokemonArray = TeambuilderPokemon[];

export class TeambuilderPokemon {

  private static regularSpriteURL = 'assets/pokemon/gifs/regular/';
  private static shinySpriteURL = 'assets/pokemon/gifs/shiny/';

  teambuilderPokemonId: number;
  id: string;
  name: ITranslatable;
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

  constructor(pokemon: IPokemon, id?: number) {
    this.teambuilderPokemonId = id;
    this.id = pokemon.id;
    this.name = pokemon.name;
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

  getId(): string {
    return this.id;
  }

  setTeambuilderId(value: number): void {
    this.teambuilderPokemonId = value;
  }

  getName(): ITranslatable {
    return this.name;
  }

  setNickname(value: string): void { this.nickname = value; }

  setLevel(value: number): void { this.level = value; }

  setHappiness(value: number): void { this.happiness = value; }

  setGender(value: GenderType): void { this.gender = value; }

  getGender(): GenderType { return this.gender; }

  setShiny(value: boolean): void {
    this.shiny = value;
    this.updateSprite();
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

  setMoves(moves: IMove[]): void {
    if (moves.length > 4) { return console.error('This Pokémon has more than 4 moves which is not allowed.'); }
    moves.forEach((move, index) => {
      this.moves[index].setData(move);
    });
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
    this.sprite = baseURL + this.getId() + '.gif';
  }

  moveSetFull(): boolean {
    return this.getMoves().length === MAX_MOVESET_SIZE;
  }

  movesWereFilled() {
    return this.movesFilled;
  }

  markMovesFilled() {
    this.movesFilled = true;
  }

  toDatabaseRecord(): ITeambuilderPokemon {
    const pokemon = ({
      id: this.getId(),
      nickname: this.nickname,
      level: this.level,
      happiness: this.happiness,
      nature: this.nature.get().id,
      gender: this.getGender(),
      shiny: this.isShiny(),
      item: this.getItem()?.id.toString(),
      ability: this.getAbility()?.id.toString(),
      moves: this.getMoves().map(m => m.id.toString()),
      evs: this.stats.getEvsDatabaseRecord(),
      dvs: this.stats.getDvsDatabaseRecord()
    });
    if (!pokemon.nickname || pokemon.nickname.length === 0) { delete pokemon.nickname; }
    if (pokemon.level === MAX_LEVEL) { delete pokemon.level; }
    if (pokemon.happiness === MAX_HAPPINESS) { delete pokemon.happiness; }
    if (pokemon.nature === DEFAULT_NATURE.id) { delete pokemon.nature; }
    if (pokemon.gender === Genders.RANDOM) { delete pokemon.gender; }
    if (!pokemon.shiny) { delete pokemon.shiny; }
    if (!pokemon.ability) { delete pokemon.ability; }
    if (!pokemon.item) { delete pokemon.item; }
    if (!pokemon.moves || pokemon.moves.length === 0) { delete pokemon.moves; }
    if (Object.keys(pokemon.evs).length === 0) { delete pokemon.evs; }
    if (Object.keys(pokemon.dvs).length === 0) { delete pokemon.dvs; }
    return pokemon;
  }
}

