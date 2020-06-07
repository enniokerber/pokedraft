import {ITranslatable} from "./ITranslatable";

export interface ITier {
  id: string;
  name: string;
  description: ITranslatable;
  nr: number;
  isCommon: boolean;
}
