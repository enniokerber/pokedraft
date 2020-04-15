import {StatMetadata} from "./IStats";


export interface INature {
  germanName: string;
  name: string;
  increases?: StatMetadata;
  decreases?: StatMetadata;
}

export interface INatureWithoutStatMetadata {
  germanName: string;
  name: string;
  increases?: string;
  decreases?: string;
}
