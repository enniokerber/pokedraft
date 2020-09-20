import {ITranslatable} from "./ITranslatable";

export interface ITier {
  id: string;
  name: string;
  description: ITranslatable;
  nr: number;
  isCommon: boolean;
}

export enum Tiers {
  AG = 'AG',
  UBER = 'Uber',
  OU = 'OU',
  UU = 'UU',
  RU = 'RU',
  NU = 'NU',
  PU = 'PU',
  UNKNOWN = 'Unknown'
}
