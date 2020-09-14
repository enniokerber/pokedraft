import {TeambuilderPokemon} from "./TeambuilderPokemon";
import {Stat} from "./Stat";
import {getStatMetadata} from "../../data";

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

export class ShowdownStringBuilder {

  private string: string;

  private constructor() {
    this.string = '';
  }

  static forPokemon(pokemon: TeambuilderPokemon): ShowdownStringBuilder {
    const string = new ShowdownStringBuilder();
    string.append(`${pokemon.getName().english} `);
    const item = pokemon.getItem();
    if (item) { string.append(`@ ${item.name.english}`); }
    string.lineBreak();
    const ability = pokemon.getAbility();
    if (ability) { string.appendWithLineBreak(`Ability: ${ability.name.english}`); }
    const evString = pokemon.stats.getEvString();
    if (evString) {
      string.appendWithLineBreak(`EVs: ${evString}`);
    }
    const dvString = pokemon.stats.getDvString();
    if (dvString) {
      string.appendWithLineBreak(`IVs: ${dvString}`);
    }
    const nature = pokemon.getNature();
    const natureName = nature.getName().english;
    if (natureName) { string.appendWithLineBreak(`${natureName} Nature`); }
    pokemon.getMoves()
      .forEach(move => string.appendWithLineBreak(`- ${move.name.english}`))
    string.lineBreak();
    return string;
  }

  getString(): string { return this.string; }

  append(string: string): void {
    this.string += string;
  }

  cutLast(nr: number = 1): void {
    this.string = this.getString().substr(0, this.getString().length - nr)
  }

  appendWithLineBreak(string: string): void {
    this.append(string);
    this.lineBreak();
  }

  lineBreak() {
    this.append('\n');
  }
}
