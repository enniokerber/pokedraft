import {INature, INatureWithoutStatMetadata} from '../api/INature';
import {DEFAULT_NATURE, getNatureById} from "../../data/natures";
import {ITranslatable} from "../api";

export class Nature {

  data: INature;

  constructor() {
    this.data = DEFAULT_NATURE;
  }

  get(): INature {
    return this.data;
  }

  getName(): ITranslatable { return this.data.name; }

  getWithoutStatMetaData(): INatureWithoutStatMetadata {
    const data = this.get();
    return ({
      ...data,
      increases: data?.increases?.statId,
      decreases: data?.decreases?.statId
    });
  }

  set(nature: INature) {
    this.data = nature;
  }

  setDefault() {
    this.data = DEFAULT_NATURE;
  }

  setById(id: number) {
    this.set(getNatureById(id));
  }
}
