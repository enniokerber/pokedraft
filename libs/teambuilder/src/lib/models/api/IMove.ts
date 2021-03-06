import {PokemonType} from "../types";
import {ITranslatable} from "./ITranslatable";

export enum MoveCategory {
  PHYSICAL = 'physical',
  SPECIAL = 'special',
  STATUS = 'status',
  UNDEFINED = 'undefined'
}

export interface IMove {
  id: number;
  name: ITranslatable;
  description: ITranslatable;
  shortDescription: ITranslatable;
  category: string;
  type: PokemonType;
  basePower: number;
  accuracy: number;
  priority: number;
  target: string;
  powerPoints: number;
  maxPowerPoints: number;
  flags: {
    alwaysConnects?: boolean;
    alwaysCrits?: boolean;
    mustBeCharged?: boolean,
    isAffectedByGravity?: boolean,
    isContactMove?: boolean,
    canBeProtected?: boolean,
    canBeReflected?: boolean,
    canBeSnatched?: boolean,
    affectsStats?: boolean,
    hasSecondaryEffect?: boolean,
    isPulseMove?: boolean;
  };
  viable?: boolean;
}

export const MOVE_DIVIDER_PROP = 'viable';

export type MovesRecord = Record<string, IMove>;
