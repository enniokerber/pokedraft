import {ITranslatable} from "./ITranslatable";

export interface StatsObject<T> {
  hp: T;
  atk: T;
  def: T;
  spatk: T;
  spdef: T;
  speed: T;
}

export type IStats = StatsObject<number>;

export interface StatMetadata {
  statId: string;
  name: ITranslatable;
  abbr: ITranslatable;
}

export interface StatWithLabel {
  id: string;
  label: ITranslatable;
}

export type ExtendedStatLabelMap = StatsObject<StatMetadata>;

export type PartialStats = Partial<IStats>;
