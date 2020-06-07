import {ITranslatable} from "./ITranslatable";
import {PokemonType} from "../types";

export interface IItem {
  id: number,
  name: ITranslatable;
  description: ITranslatable;
  imgSrc?: string;
  flingBasePower?: number;
  berry?: IBerry;
  isUnreleased?: boolean;
  popular?: boolean;
}

export const ITEM_DIVIDER_PROP = 'popular';

export interface IBerry {
  naturalGift: INaturalGift;
}

export interface INaturalGift {
  basePower: number;
  type: PokemonType;
}

export type ItemRecord = Record<string, IItem>;
