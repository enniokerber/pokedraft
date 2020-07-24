import {CoverageTypes, SingleTypeStatistics, TypeStatistics, TypeStatisticsMap} from "../api/TypeStatistics";
import {DOUBLE_RESISTED, IMMUNE, NEUTRAL, RESISTED, SUPER_EFFECTIVE, TypeDefinition} from "../api/TypeChart";
import {TeambuilderPokemonArray} from "./TeambuilderPokemon";
import {TYPE_CHART} from "../../data";
import {POKEMON_TYPES, PokemonType} from "../types";

/*
  This class calculates the type statistics; it takes every single pokemon on the team and
  counts the answers, resistances and immunities against each type.
  It´s based on the TYPE_CHART constant which describes the characteristics of each type.
  Characteristics means: weaknesses, effectiveness, immunities.
 */
export class TypeStatisticsCalculator {

  /*
    The statistics itself, an array of single type statistics where each object describes the statistics for one of the 19 types.
    This public variable is used for displaying the statistics.
   */
  public statistics: TypeStatistics;

  /*
    This is an internal implementation detail, do not use.
    It contains all the data from the statistics, but is used for quicker access of the single type statistics when building the statistics.
    In the end this is the basis for the displayed statistics.
   */
  private typeStatisticsMap: TypeStatisticsMap;

  constructor() {
    this.statistics = [];
  }

  /*
    Clear all the current counts and data
   */
  public reset(): void {
    this.statistics = [];
    this.typeStatisticsMap = this.emptyTypeStatisticsMap();
  }

  /*
    This is the main method of the TypeStatisticsCalculator.
    It calculates the displayed statistics.
   */
  public calculate(team: TeambuilderPokemonArray): void {
    // clear the current statistics
    this.reset();

    team.map(pokemon => {

      const types = pokemon.getTypes();
      const firstType = types[0];
      const secondType = types[1];

      /*
          If the Pokémon has 2 Types, effectiveness and resistances should only be counted once.
          Ex: Hatterene (Psychic/Fairy) resists Fighting-Type 4x, because both Psychic and Fairy resist Fighting.
          Therefore, the resistances against Fighting should only be counted as 1 resistance.
          That means, one resistance per type per Pokémon.
      */

      if (firstType && secondType) {
        this.addDoubleType(firstType, secondType);
      } else {
        this.addSingleType(firstType);
      }

      /*
        Take all moves that are set (not null/undefined) and add their types attacking characteristics if it is an attacking move (basepower > 0)
       */
      pokemon.getMoves().filter(move => !!move)
        .forEach(move => {
          if (move.basePower > 0) {
            this.addAttackingCharacteristics(move.type);
          }
        })
    });

    this.statistics = Object.values(this.typeStatisticsMap);
    console.log(this.statistics);
    this.checkCoverage();
  }

  /*
    This adds the characteristics of one type to the statistics object.
    It counts resistances, effectiveness and immunities.
   */
  private addSingleType(type: PokemonType): void {
    this.addDefendingCharacteristics(type);
  }

  /*
    This adds only the attacking characteristics of a type to the statistics object.
    @Param: type = The type which characteristics should be added.
    @Param: attackingTypes (optional): limits the types relationships that should be looked at in this process,
            if not provided look at all types that this type has a special effectiveness against when attacking
   */
  private addAttackingCharacteristics(type: PokemonType, attackingTypes?: string[]): void {
    const typeDefinition: TypeDefinition = TYPE_CHART[type];
    const attacking = attackingTypes || Object.keys(typeDefinition.atk);

    attacking.forEach(attackingType => {
      // take one the types with special characteristics when it comes to FIRE-type moves
      // ex: ICE-type
      const attackingTypeValue = typeDefinition.atk[attackingType]; // factor when FIRE-type move attacks this type (ICE-type = 2, because its super effective)
      if (attackingTypeValue === SUPER_EFFECTIVE) {
        (this.typeStatisticsMap[attackingType] as SingleTypeStatistics).counters++;
      }
    });

    POKEMON_TYPES.forEach(_type => {
      const attackingTypeValue = typeDefinition.atk[_type];
      if (typeof attackingTypeValue === 'undefined' || attackingTypeValue > 0) {
        this.typeStatisticsMap[_type].hitBy++;
      }
    })
  }

  /*
     This adds only the defending characteristics of a type to the statistics object.
     @Params: same as addAttackingCharacteristics()
   */
  private addDefendingCharacteristics(type: PokemonType, defendingTypes?: string[]): void {
    const typeDefinition: TypeDefinition = TYPE_CHART[type];
    const defending = defendingTypes || Object.keys(typeDefinition.def);

    defending.forEach(defendingType => {
      const defendingTypeValue = typeDefinition.def[defendingType];
      switch (defendingTypeValue) {
        case RESISTED: (this.typeStatisticsMap[defendingType] as SingleTypeStatistics).resistances++; break;
        case IMMUNE: (this.typeStatisticsMap[defendingType] as SingleTypeStatistics).immunities++; break;
      }
    });
  }


  /*
    This method applies type characteristics of a Pokémon that has two types.
    It´s special in that way, as that equal type relationships between the two types are counted as just one.
    That means if the Pokémon has 2 Types, effectiveness and resistances should only be counted once.
          Ex: Hatterene (Psychic/Fairy) resists Fighting-Type 4x, because both Psychic and Fairy resist Fighting.
          Therefore, the resistances against Fighting should only be counted as 1 resistance.
          That means, one resistance per type per Pokémon.


    This method might look complex at first, but it only does basic operations.
    It splits up the types that are looked at, so that the types that have relationships in common are looked at separately.
    Ex: Psychic and Fairy both resist Fighting. So the relationship "resist Fighting" is only counted as one resistance.
   */
  private addDoubleType(type1: PokemonType, type2: PokemonType): void {

    // determine the type relationships of the first types [ex: Psychic]
    const type1Definition: TypeDefinition = TYPE_CHART[type1]; // [Psychic] type definition
    // let attacking1: string[] = Object.keys(type1Definition.atk); // [Psychic] for ex. is effective against Fighting, so Fighting is in that Array
    let defending1: string[] = Object.keys(type1Definition.def); // [Psychic] resists at least Fighting, so Fighting is also in that aways

    // determine the type relationships of the second type [ex. Fairy]
    const type2Definition: TypeDefinition = TYPE_CHART[type2];
    // let attacking2: string[] = Object.keys(type2Definition.atk);
    let defending2: string[] = Object.keys(type2Definition.def);

    /*
      Determine the types that both types have attacking relationships with.
      ex: for [Psychic/Fairy] attackingIntersect includes Fighting because both Psychic and Fairy are effective against Fighting
      (the types just both need to have a relationship with Fighting type, they are not required to be both effective against it in that case)
     */
    /*
    const attackingIntersect = attacking1.filter(t1 => attacking2.includes(t1));
    attacking1 = attacking1.filter(t => !attackingIntersect.includes(t));
    attacking2 = attacking2.filter(t => !attackingIntersect.includes(t));
    */

    /*
      Same behaviour applies to the defense.
     */
    const defendingIntersect = defending1.filter(t1 => defending2.includes(t1)); // both types have some characteristics in common
    defending1 = defending1.filter(t => !defendingIntersect.includes(t));
    defending2 = defending2.filter(t => !defendingIntersect.includes(t));

    /*
      Add the type relationships that only apply for one of the types.
      Ex.: Psychic is effective against Poison, but Fairy not, so the first call:
           this.addAttackingCharacteristics(type1, attacking1) adds the relationship "Psychic effective against Poison" to the statistics.
     */
    // this.addAttackingCharacteristics(type1, attacking1);
    // this.addAttackingCharacteristics(type2, attacking2);
    this.addDefendingCharacteristics(type1, defending1);
    this.addDefendingCharacteristics(type2, defending2);

    /*
      Look at the type relationships that look at effectiveness.
      If the looked at type is effective against only one of the types of the intersection,
      the Pokémon counts as a counter against this type.
     */
    /*
    attackingIntersect.forEach(attackingType => {
      const attackingTypeValue1 = type1Definition.atk[attackingType];
      const attackingTypeValue2 = type2Definition.atk[attackingType];
      if (attackingTypeValue1 === SUPER_EFFECTIVE || attackingTypeValue2 === SUPER_EFFECTIVE) {
        (this.typeStatisticsMap[attackingType] as SingleTypeStatistics).counters++;
      }
    });
    */

    /*
      Look at the type relationships that have to do with resistances and immunities.
      If the two types together resist the type, the type has just 1 resistance more.
      If the two types together are neutral or weak against this type, no resistance is counted as expected.
     */
    defendingIntersect.forEach(defendingType => {
      let defendingTypeValue1 = type1Definition.def[defendingType];
      let defendingTypeValue2 = type2Definition.def[defendingType];
      if (typeof defendingTypeValue1 === 'undefined') { defendingTypeValue1 = NEUTRAL; }
      if (typeof defendingTypeValue2 === 'undefined') { defendingTypeValue2 = NEUTRAL; }
      const duoTypeFactor = defendingTypeValue1 * defendingTypeValue2;
      if (duoTypeFactor === RESISTED || duoTypeFactor === DOUBLE_RESISTED) {
        (this.typeStatisticsMap[defendingType] as SingleTypeStatistics).resistances++;
      } else
      if (duoTypeFactor === IMMUNE) {
        (this.typeStatisticsMap[defendingType] as SingleTypeStatistics).immunities++;
      }
    });
  }

  public checkCoverage() {
    this.statistics = this.statistics.map(type => {
        if (type.counters === 0 && type.resistances === 0 && type.immunities === 0) {
          type.coverage = CoverageTypes.BAD;
        } else
        if (type.counters > 0 && (type.resistances > 0 || type.immunities > 0)) {
          type.coverage = CoverageTypes.GOOD;
        } else {
          type.coverage = CoverageTypes.MID;
        }
        return type;
      });
  }

  /*
    This method produces an empty map of type statistics.
    Each property represents one type and contains its statistics.
    It´s the basis for the calculation.
   */
  private emptyTypeStatisticsMap(): TypeStatisticsMap {
    const emptyTypeStatistics = {};
    POKEMON_TYPES.forEach(type => emptyTypeStatistics[type] = ({
        type,
        counters: 0,
        hitBy: 0,
        resistances: 0,
        immunities: 0,
        coverage: CoverageTypes.BAD
      } as SingleTypeStatistics)
    );
    return emptyTypeStatistics as TypeStatisticsMap;
  }

}
