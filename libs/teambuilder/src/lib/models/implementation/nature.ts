import {INature, INatureWithoutStatMetadata} from '../api/INature';
import {natures} from "../../data/natures";
import {StatMetadata} from "../api/IStats";

export class Nature {

  german: string;
  name: string;
  increases?: StatMetadata;
  decreases?: StatMetadata;

  private readonly natures: INature[];

  constructor(from: INature) {
    this.name = from.name;
    this.german = from.germanName;
    this.increases = from.increases ? from.increases : null;
    this.decreases = from.decreases ? from.decreases : null;
    this.natures = natures;
  }

  isNeutral(): boolean {
    return (this.increases === null && this.decreases === null);
  }

  getName(): string {
    return this.name;
  }

  getGerman(): string {
    return this.german;
  }

  getIncreased(): string {
    return this.increases ? this.increases.statId : null;
  }

  getDecreased(): string {
    return this.decreases ? this.decreases.statId : null;
  }

  getIncreasedWithMetadata(): StatMetadata {
    return this.increases;
  }

  getDecreasedWithMetadata(): StatMetadata {
    return this.decreases;
  }

  getNatureId(): number {
    return this.natures.findIndex(nature => nature.name === this.name);
  }

  getValue(): INatureWithoutStatMetadata {
    return {
      name: this.getName(),
      germanName: this.getGerman(),
      increases: this.getIncreased(),
      decreases: this.getDecreased()
    };
  }

  change(from: INature): void {
    this.name = from.name;
    this.german = from.germanName;
    this.increases = from.increases ? from.increases : null;
    this.decreases = from.decreases ? from.decreases : null;
  }

  setByName(name: string): void {
    const nature = this.natures.find(n => n.name === name);
    this.change(nature);
  }

  setById(id: number) {
    const nature = this.natures[id];
    this.change(nature);
  }
}
