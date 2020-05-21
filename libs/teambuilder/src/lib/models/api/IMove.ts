import {PokemonType} from "../types";

export enum MoveCategory {
  PHYSICAL = 'physical',
  SPECIAL = 'special',
  STATUS = 'status',
  UNDEFINED = 'undefined'
}

export interface IMove {
  name: string;
  german: string;
  description: string;
  descriptionGerman: string;
  shortDescription: string;
  shortDescriptionGerman: string;
  category: string;
  type: PokemonType;
  basePower: number;
  accuracy: number;
  priority: number;
  target: string;
  alwaysConnects: boolean;
  alwaysCrits: boolean;
  powerPoints: number;
  maxPowerPoints: number;
  flags: {
    mustBeCharged: boolean,
    isAffectedByGravity: boolean,
    isContactMove: boolean,
    canBeProtected: boolean,
    canBeReflected: boolean,
    canBeSnatched: boolean,
    affectsStats: boolean,
    hasSecondaryEffect: boolean,
    isPulseMove: boolean,
    isZMove: boolean
  };
  zMovePower: number;
  zMoveEffect: string;
  contestType: string;
  isViable: boolean;
}
