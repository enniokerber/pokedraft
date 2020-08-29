import {ITranslatable} from "./ITranslatable";

export interface IAbility {
  id: number;
  name: ITranslatable;
  description: ITranslatable;
  shortDescription: ITranslatable;
}

export type AbilityRecord = Record<string, IAbility>;
