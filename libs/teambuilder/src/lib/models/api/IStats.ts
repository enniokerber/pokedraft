import {ITranslatable} from "./ITranslatable";

export interface IStats {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  speed: number;
}

export interface StatMetadata {
  statId: string;
  name: ITranslatable;
  abbr: ITranslatable;
}

export interface StatWithLabel {
  id: string;
  label: ITranslatable;
}

export type PartialStats = Partial<IStats>;
