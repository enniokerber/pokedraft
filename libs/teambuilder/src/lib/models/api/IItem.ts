import {ITranslatable} from "./ITranslatable";
import {PokemonType} from "../types";

export interface IItem {
  id: string;
  name: ITranslatable;
  description: ITranslatable;
  imgSrc?: string;
  flingBasePower: number;
  berry?: IBerry;
  isUnreleased?: boolean;
  popular?: boolean;
}

export interface IBerry {
  naturalGift: INaturalGift;
}

export interface INaturalGift {
  basePower: number;
  type: PokemonType;
}
