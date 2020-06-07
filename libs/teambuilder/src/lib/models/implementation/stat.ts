import {Stats} from "./stats";
import {MAX_DVS, MAX_EVS_PER_STAT, MAX_EVS_TOTAL} from "../../data";

export class Stat {

    public value: number;
    public modifiedValue: number;
    public stage: number;
    public evs: number;
    public dvs: number;
    public natureValue: number;

    constructor(public base: number,
                public allStats: Stats) {
        this.base = base;
        this.stage = 0;
        this.evs = 0;
        this.dvs = MAX_DVS;
        this.natureValue = 1;
        this.modifiedValue = 0;
        this.allStats = allStats;
        this.update();
    }

    cannotGoHigher() {
      return this.allStats.evSumMaxed || this.getEvs() === MAX_EVS_PER_STAT;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
      this.value = value;
    }

    getModifiedValue(): number {
        return this.modifiedValue;
    }

    getStage(): number {
        return this.stage;
    }

    getEvs(): number {
        return this.evs;
    }

    setEvs(evs: number) {
      if (!evs) { this.evs = 0; return; }
      this.evs = evs;
    }

    setEvsAndUpdate(evs: number): void {
      this.setEvs(evs);
      this.update();
      this.allStats.calculateEvSum();
    }

    setEvsFromSlider(evs: number): void {
      if (evs < this.getEvs()) {
        // lowering is always ok
        return this.setEvsAndUpdate(evs);
      } else {

        if (evs > MAX_EVS_PER_STAT) {
          evs = MAX_EVS_PER_STAT;
        }

        // otherwise calc the space between the new and the current evs
        const evSum = this.allStats.getEvSum();
        const diff = Math.abs(this.getEvs() - evs);

        // and check if the added points will overflow the MAX_EVS
        if (evSum + diff <= MAX_EVS_TOTAL) {
          return this.setEvsAndUpdate(evs);
        // if it would overflow, add as much as there is space
        } else {
          return this.setEvsAndUpdate(this.getEvs() + MAX_EVS_TOTAL - this.allStats.getEvSum());
        }
      }
    }

    setEvsFromInput(evs: number) {
      // if ev value is invalid or lower than allowed, set it to min
      if (!evs || Number.isNaN(evs) || evs < 0) {
        return this.setEvsFromSlider(0);
      }

      // sometimes there a additional zeros in front of the number,
      // which have to be cut off, so the input doesnt look stupid
      let stringValue = evs.toString();
      while (stringValue.charAt(0) === '0') { stringValue = stringValue.substr(1); }
      return this.setEvsFromSlider(Number(stringValue));
    }

    getDvs(): number {
        return this.dvs;
    }

    setDvs(dvs: number): void {
      if (!dvs) { this.dvs = MAX_DVS; return; }
      this.dvs = dvs;
    }

    positiveNature(): void {
        this.natureValue = 1.1;
        this.update();
    }

    neutralNature(): void {
       this.natureValue = 1;
       this.update();
    }

    negativeNature(): void {
        this.natureValue = 0.9;
      this.update();
    }

    get naturePositive() { return this.natureValue === 1.1; }

    get natureNegative() { return this.natureValue === 0.9; }

    isIncreased(): boolean {
        return (this.stage > 0);
    }

    isDecreased(): boolean {
        return (this.stage < 0);
    }

    isPure(): boolean {
        return (this.stage === 0);
    }

    update(level: number = 100): void {
        const factor1 = Math.floor((2 * this.base + this.dvs + Math.floor(this.evs / 4)) * level / 100 + 5);
        this.setValue(Math.floor(factor1 * this.natureValue));
    }

    modify(): void {
        let a = 2;
        let b = 2;

        if (this.stage < 0) {
            b -= this.stage;
        } else {
            if (this.stage > 0) {
                a += this.stage;
            }
        }

        this.modifiedValue = Math.floor(this.value * (a / b));
    }
}

export class HPStat extends Stat {

  constructor(base: number, stats: Stats) {
    super(base, stats);
  }

  // HP Foumlar
  update(level: number = 100): void {
    const factor1 = (2 * this.base + this.dvs + Math.floor(this.evs / 4)) * level;
    this.value = Math.floor(factor1 / 100) + level + 10;
  }

}
