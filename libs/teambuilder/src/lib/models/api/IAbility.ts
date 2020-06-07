import {ITranslatable} from "./ITranslatable";

export interface IAbility {
  name: ITranslatable;
  description: ITranslatable;
  shortDescription: ITranslatable;
}

export type AbilityRecord = Record<string, IAbility>;
