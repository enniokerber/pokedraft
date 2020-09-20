import {Stats} from "./Stats";
import {
  MAX_DVS,
  MAX_EVS_PER_STAT,
  NEGATIVE_NATURE_VALUE,
  NEUTRAL_NATURE_VALUE,
  POSITIVE_NATURE_VALUE
} from '../../data';
import { EVRangingNumber, IRangingNumber, RangingNumber } from './RangingNumber';

export class Stat {

    public value: number;
    public stage: number;
    public modifiedValue: number;
    public evs: IRangingNumber;
    public dvs: IRangingNumber;
    public natureValue: number;

    constructor(public base: number,
                public allStats: Stats) {
        this.base = base;
        this.stage = 0;
        this.evs = new EVRangingNumber(0, 0, MAX_EVS_PER_STAT, allStats);
        this.dvs = new RangingNumber(MAX_DVS, 0, MAX_DVS);
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
        return this.evs.getValue();
    }

    setEvs(evs: number) {
      if (!evs) { return this.evs.setValue(0); }
      this.evs.setValue(evs);
    }

    updateEvs(): void {
      this.update();
    }

    setEvsFromSlider(evs: number): void {
      this.evs.setFromSlider(evs);
      this.updateEvs();
    }

    setEvsFromInput(evs: number) {
      this.evs.setFromInput(evs);
      this.updateEvs();
    }

    getDvs(): number {
        return this.dvs.getValue();
    }

    setDvs(dvs: number): void {
      if (!(typeof dvs === 'number')) { return this.dvs.setValue(MAX_DVS); }
      this.dvs.setValue(dvs);
    }

    positiveNature(): void {
        this.natureValue = POSITIVE_NATURE_VALUE;
        this.update();
    }

    neutralNature(): void {
       this.natureValue = NEUTRAL_NATURE_VALUE;
       this.update();
    }

    negativeNature(): void {
      this.natureValue = NEGATIVE_NATURE_VALUE;
      this.update();
    }

    get naturePositive() { return this.natureValue === POSITIVE_NATURE_VALUE; }

    get natureNegative() { return this.natureValue === NEGATIVE_NATURE_VALUE; }

    isIncreased(): boolean {
        return (this.stage > 0);
    }

    isDecreased(): boolean {
        return (this.stage < 0);
    }

    isPure(): boolean {
        return (this.stage === 0);
    }

    update(level: number = this.allStats.getLevel()): void {
        const factor1 = Math.floor((2 * this.base + this.dvs.getValue() + Math.floor(this.evs.getValue() / 4)) * level / 100 + 5);
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

  // HP Formular
  update(level: number = 100): void {
    const factor1 = (2 * this.base + this.dvs.getValue() + Math.floor(this.evs.getValue() / 4)) * level;
    this.value = Math.floor(factor1 / 100) + level + 10;
  }

}
