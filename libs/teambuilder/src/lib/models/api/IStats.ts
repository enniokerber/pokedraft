
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
  name: string;
  nameGerman: string;
  abbr: string;
  abbrGerman: string;
}

export interface StatWithLabel {
  id: string;
  label: string;
}
