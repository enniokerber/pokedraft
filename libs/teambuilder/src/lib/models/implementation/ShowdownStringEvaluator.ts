import {ShowdownPokemon} from "./ShowdownPokemon";
import {getStatMetadataByAbbr} from "../../data";
import {
  ABILITY_TOKEN,
  EV_TOKEN, HAPPINESS_TOKEN,
  IV_TOKEN,
  LEVEL_TOKEN,
  MOVE_TOKEN,
  NATURE_TOKEN,
  SHINY_TOKEN
} from "./ShowdownStringBuilder";

const YES = 'Yes';

export class ShowdownStringEvaluator {

  public static evaluate(singleShowdownPokemon: string): ShowdownPokemon {
    const pokemon: ShowdownPokemon = new ShowdownPokemon();
    const lines: string[] = singleShowdownPokemon.split('\n');
    const firstline: string = lines.shift();
    const [ name, item ] = firstline.split(' @ ');
    const [ first, second, third ] = name.trim().split(' ');

    /* if all are set, then: first = nickname, second = (pokemon-name), third = (gender in uppercase) */
    if (third) {
      pokemon.nickname = first;
      pokemon.name = second.substr(1, second.length - 2);
      pokemon.gender = third[1]?.toLowerCase();
    } else
    if (second) {
      if (second.length === 3) {
        /* This must be a gender then: (M), (F), ... */
        pokemon.name = first;
        pokemon.gender = second[1]?.toLowerCase();
      } else {
        pokemon.nickname = first;
        pokemon.name = second.substr(1, second.length - 2);
      }
    } else {
      pokemon.name = first;
    }

    pokemon.item = item?.trim() || null;

    lines.forEach(line => {

      if (line.startsWith(ABILITY_TOKEN)) {
        pokemon.ability = line.substr(ABILITY_TOKEN.length).trim();
      } else
      if (line.startsWith(SHINY_TOKEN)) {
        pokemon.shiny = line.substr(SHINY_TOKEN.length) === YES;
      } else
      if (line.startsWith(LEVEL_TOKEN)) {
        pokemon.level = Number(line.substr(LEVEL_TOKEN.length));
      } else
      if (line.startsWith(HAPPINESS_TOKEN)) {
        pokemon.happiness = Number(line.substr(HAPPINESS_TOKEN.length));
      } else
      if (line.endsWith(NATURE_TOKEN)) {
        pokemon.nature = line.split(NATURE_TOKEN)[0].trim();
      } else
      if (line.startsWith(EV_TOKEN)) {
        const evString = line.substr(EV_TOKEN.length);
        const evProps = evString.split(' / ');
        evProps.forEach(propString => {
          const [ evValueString, evProp ] = propString.split(' ');
          const statMetadata = getStatMetadataByAbbr(evProp.trim());
          if (statMetadata) {
            pokemon.evs[statMetadata.statId] = Number(evValueString);
          }
        });
      } else
      if (line.startsWith(IV_TOKEN)) {
        const ivString = line.substr(IV_TOKEN.length);
        const ivProps = ivString.split(' / ');
        ivProps.forEach(propString => {
          const [ ivValueString, ivProp ] = propString.split(' ');
          const statMetadata = getStatMetadataByAbbr(ivProp.trim());
          if (statMetadata) {
            pokemon.ivs[statMetadata.statId] = Number(ivValueString);
          }
        });
      } else
      if (line.startsWith(MOVE_TOKEN)) {
        pokemon.moves.push(line.substr(MOVE_TOKEN.length));
      }

    });
    console.log(pokemon);
    return pokemon;
  }

}
