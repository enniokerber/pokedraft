import {StatMetadata} from "./IStats";
import {ITranslatable} from "./ITranslatable";


export interface INature {
  id?: number;
  name: ITranslatable;
  increases?: StatMetadata;
  decreases?: StatMetadata;
}

export interface INatureWithoutStatMetadata {
  id?: number;
  name: ITranslatable;
  increases?: string;
  decreases?: string;
}
