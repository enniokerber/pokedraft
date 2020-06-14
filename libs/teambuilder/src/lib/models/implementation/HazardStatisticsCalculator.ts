import {Hazards, HAZARDS, HazardStatistics, HazardStatisticsMap, SingleHazardStatistics} from "../api/HazardStatistics";
import {
  PokemonType,
  PokemonTypes,
} from "../types";
import {TeambuilderPokemon, TeambuilderPokemonArray} from "./TeambuilderPokemon";
import {FOUR_TIMES_SUPER_EFFECTIVE, IMMUNE, IMove, NEUTRAL, SUPER_EFFECTIVE} from "../api";
import {TYPE_CHART} from "../../data";
import {Abilities} from "../constants";

export class HazardStatisticsCalculator {

  public statistics: HazardStatistics;

  private hazardStatisticsMap: HazardStatisticsMap;

  constructor() {
    this.statistics = [];
  }

  /*
  Clear all the current counts and data
 */
  public reset(): void {
    this.statistics = [];
    this.hazardStatisticsMap = this.emptyHazardStatisticsMap();
  }

  public calculate(team: TeambuilderPokemonArray) {
    this.reset();
    team.forEach(pokemon => {
      this.addStealthRockData(pokemon);
    });
    this.statistics = Object.values(this.hazardStatisticsMap);
  }

  private addStealthRockData(fromPokemon: TeambuilderPokemon) {
    const types: PokemonType[] = fromPokemon.getTypes();
    const moves: IMove[] = fromPokemon.getMoves();
    const stealthRocksStatistics: SingleHazardStatistics = this.hazardStatisticsMap[Hazards.STEALTH_ROCK];

    if (moves.some(move => move?.name.english === Hazards.STEALTH_ROCK)) { stealthRocksStatistics.users++; }

    const rockTypeEffectiveness =
      types.reduce((acc, type) => {
        const rockTypeChart = TYPE_CHART[type].def[PokemonTypes.Rock];
        return rockTypeChart ? rockTypeChart * acc : NEUTRAL;
      }, 1);

    if ((rockTypeEffectiveness === SUPER_EFFECTIVE || rockTypeEffectiveness === FOUR_TIMES_SUPER_EFFECTIVE)
        && !(fromPokemon.getAbility()?.name.english === Abilities.MAGIC_GUARD)) {
      stealthRocksStatistics.weaknesses++;
      stealthRocksStatistics.hits++;
    } else
    if (rockTypeEffectiveness === IMMUNE) { stealthRocksStatistics.immune++; }
      else {
        stealthRocksStatistics.hits++;
      }
  }

  private emptyHazardStatisticsMap(): HazardStatisticsMap {
    const emptyHazardsStatistics = {};
    HAZARDS.forEach(hazardType => {
      const hazardId = hazardType.toLowerCase().replace(' ', '-');
      emptyHazardsStatistics[hazardType] = {
        class: hazardId,
        name: hazardType,
        users: 0,
        hits: 0,
        immune: 0,
        weaknesses: 0
      } as SingleHazardStatistics;
    });
    return emptyHazardsStatistics as HazardStatisticsMap;
  }

}
