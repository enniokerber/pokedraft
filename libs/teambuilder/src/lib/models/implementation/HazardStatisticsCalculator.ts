import {
  HAZARDS,
  HAZARDSWITHTRANSLATION,
  Hazards,
  HazardStatistics,
  HazardStatisticsMap,
  SingleHazardStatistics
} from "../api/HazardStatistics";
import {
  PokemonType,
  PokemonTypes,
} from "../types";
import {TeambuilderPokemon, TeambuilderPokemonArray} from "./TeambuilderPokemon";
import {FOUR_TIMES_SUPER_EFFECTIVE, IMMUNE, NEUTRAL, SUPER_EFFECTIVE} from "../api";
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

  public calculate(forTeam: TeambuilderPokemonArray) {
    this.reset();
    forTeam.forEach(pokemon => {
      this.checkMovesetForHazards(pokemon);
      this.updateStealthRockStatistics(pokemon);
      this.updateSpikesStatistics(pokemon);
      this.updateToxicSpikesStatistics(pokemon);
      this.addRapidSpinData(pokemon);
    });
    this.statistics = Object.values(this.hazardStatisticsMap);
    delete this.hazardStatisticsMap;
  }

  private checkMovesetForHazards(pokemon: TeambuilderPokemon) {
    pokemon.getMoves()
      .forEach(move => {
        const moveName = move?.name.english;
        if (moveName && HAZARDS.includes(moveName)) {
          this.hazardStatisticsMap[moveName].users++;
        }
      });
  }

  private updateStealthRockStatistics(fromPokemon: TeambuilderPokemon) {
    const types: PokemonType[] = fromPokemon.getTypes();
    const stealthRocksStatistics: SingleHazardStatistics = this.hazardStatisticsMap[Hazards.STEALTH_ROCK];

    const rockTypeEffectiveness =
      types.reduce((acc, type) => {
        const rockTypeChart = TYPE_CHART[type].def[PokemonTypes.Rock];
        return (rockTypeChart || NEUTRAL) * acc;
      }, 1);

    if ((rockTypeEffectiveness === SUPER_EFFECTIVE || rockTypeEffectiveness === FOUR_TIMES_SUPER_EFFECTIVE)
        && !this.abilityProtectsFromHazards(fromPokemon)) {
      stealthRocksStatistics.weaknesses++;
      stealthRocksStatistics.hits++;
    } else
    if (rockTypeEffectiveness === IMMUNE) { stealthRocksStatistics.immune++; }
      else {
        stealthRocksStatistics.hits++;
      }
  }

  private updateSpikesStatistics(fromPokemon: TeambuilderPokemon) {
    const spikesStatistics = this.hazardStatisticsMap[Hazards.SPIKES];
    if (fromPokemon.getTypes().includes(PokemonTypes.Flying) || this.abilityProtectsFromHazards(fromPokemon)) {
      spikesStatistics.immune++;
    } else {
      spikesStatistics.hits++;
    }
  }

  private updateToxicSpikesStatistics(fromPokemon: TeambuilderPokemon) {
    const toxicSpikeStatistics = this.hazardStatisticsMap[Hazards.TOXIC_SPIKES];
    if (fromPokemon.getTypes()
        .some(type => type === PokemonTypes.Poison || type === PokemonTypes.Flying || type === PokemonTypes.Steel)
          || this.abilityProtectsFromHazards(fromPokemon)) {
      toxicSpikeStatistics.immune++;
    } else {
      toxicSpikeStatistics.hits++;
    }
  }

  private addRapidSpinData(fromPokemon: TeambuilderPokemon) {
    const rapidSpinStatistics = this.hazardStatisticsMap[Hazards.RAPID_SPINNER];
    if (fromPokemon.getTypes().includes(PokemonTypes.Ghost)) {
      rapidSpinStatistics.immune++;
    } else {
      rapidSpinStatistics.hits++;
    }
  }

  private abilityProtectsFromHazards(pokemon: TeambuilderPokemon): boolean {
    return pokemon.getAbility()?.name.english === Abilities.MAGIC_GUARD;
  }

  private emptyHazardStatisticsMap(): HazardStatisticsMap {
    const emptyHazardsStatistics = {};
    HAZARDSWITHTRANSLATION.forEach(hazard => {
      const hazardId = hazard.english.toLowerCase().replace(' ', '-');
      emptyHazardsStatistics[hazard.english] = {
        class: hazardId,
        name: hazard,
        users: 0,
        hits: 0,
        immune: 0,
        weaknesses: 0
      } as SingleHazardStatistics;
    });
    return emptyHazardsStatistics as HazardStatisticsMap;
  }

}
