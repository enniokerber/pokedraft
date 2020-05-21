import {INature, INatureWithoutStatMetadata} from '../api/INature';
import {DEFAULT_NATURE, natures} from "../../data/natures";

export class Nature {

  data: INature;

  constructor() {
    this.data = DEFAULT_NATURE;
  }

  get(): INature {
    return this.data;
  }

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
    this.set(natures[id]);
  }
}
