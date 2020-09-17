import {PartialStats} from "../api";
import {DEFAULT_NATURE, MAX_HAPPINESS, MAX_LEVEL} from "../../data";

export class ShowdownPokemon {

  name: string;
  nickname: string;
  shiny: boolean;
  level: number;
  happiness: number;
  gender: string;
  item: string;
  ability: string;
  evs: PartialStats;
  ivs: PartialStats;
  nature: string;
  moves: string[];

  constructor() {
    this.name = null;
    this.nickname = null;
    this.shiny = false;
    this.level = MAX_LEVEL;
    this.happiness = MAX_HAPPINESS;
    this.item = null;
    this.ability = null;
    this.evs = { };
    this.ivs = { };
    this.nature = DEFAULT_NATURE.name.english;
    this.moves = [];
  }

}
