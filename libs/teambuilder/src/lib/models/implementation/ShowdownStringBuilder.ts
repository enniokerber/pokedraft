import {TeambuilderPokemon} from "./TeambuilderPokemon";
import {MAX_HAPPINESS, MAX_LEVEL} from "../../data";
import {Genders} from "../types";

/*
  SHOWDOWN STRING
  Bisharp @ Focus Sash
  Ability: Defiant
  EVs: 252 HP / 252 Atk / 4 Spe
  Adamant Nature
  IVs: 30 Spe
  - Knock Off
  - Iron Head
  - Sucker Punch
  - Metal Burst
 */

export const SHINY_TOKEN = 'Shiny: ';
export const LEVEL_TOKEN = 'Level: ';
export const HAPPINESS_TOKEN = 'Happiness: ';
export const ABILITY_TOKEN = 'Ability: ';
export const NATURE_TOKEN = ' Nature';
export const EV_TOKEN = 'EVs: ';
export const IV_TOKEN = 'IVs: ';
export const MOVE_TOKEN = '- ';

export class ShowdownStringBuilder {

  private string: string;

  private constructor() {
    this.string = '';
  }

  static forPokemon(pokemon: TeambuilderPokemon): ShowdownStringBuilder {
    const string = new ShowdownStringBuilder();
    const pokemonName = pokemon.getName().english;
    if (pokemon.getNickname()) {
      string.append(`${pokemon.getNickname()} (${pokemonName})`)
    } else {
      string.append(`${pokemonName}`);
    }
    if (!(pokemon.getGender() === Genders.RANDOM || pokemon.requiresGender())) { string.append(` (${pokemon.getGender().toUpperCase()})`); }
    const item = pokemon.getItem();
    if (item) { string.append(` @ ${item.name.english}`); }
    string.lineBreak();
    const ability = pokemon.getAbility();
    if (ability) { string.appendWithLineBreak(`${ABILITY_TOKEN}${ability.name.english}`); }
    if (pokemon.getLevel() < MAX_LEVEL) { string.appendWithLineBreak(`${LEVEL_TOKEN}${pokemon.getLevel()}`); }
    if (pokemon.isShiny()) { string.appendWithLineBreak(`${SHINY_TOKEN}Yes`); }
    if (pokemon.getHappiness() < MAX_HAPPINESS) { string.appendWithLineBreak(`${HAPPINESS_TOKEN}${pokemon.getHappiness()}`); }
    const evString = pokemon.stats.getEvString();
    if (evString) {
      string.appendWithLineBreak(`${EV_TOKEN}${evString}`);
    }
    const dvString = pokemon.stats.getDvString();
    if (dvString) {
      string.appendWithLineBreak(`${IV_TOKEN}${dvString}`);
    }
    const nature = pokemon.getNature();
    const natureName = nature.getName().english;
    if (natureName) { string.appendWithLineBreak(`${natureName}${NATURE_TOKEN}`); }
    pokemon.getMoves()
      .forEach(move => string.appendWithLineBreak(`${MOVE_TOKEN}${move.name.english}`))
    return string;
  }

  getString(): string { return this.string; }

  append(string: string): void {
    this.string += string;
  }

  appendWithLineBreak(string: string): void {
    this.append(string);
    this.lineBreak();
  }

  lineBreak() {
    this.append('\n');
  }
}
