
/*
Handles the logic for a typable ranging number.
 */

import { Stats } from '../implementation';
import { MAX_EVS_TOTAL } from '../../data';

export interface IRangingNumber {
  value: number;
  getValue(): number;
  setValue(value: number);
  setFromSlider(value: number);
  setFromInput(value);
}


export class RangingNumber implements IRangingNumber {

  public value: number;

  constructor(initialValue: number = 0,
              private readonly min: number = 0,
              private readonly max: number = 100) {
    this.value = initialValue;
    this.min = min;
    this.max = max;
  }

  getValue(): number { return this.value; }

  setValue(value: number) { this.value = value; }

  setFromSlider(value: number) {
    if (value > this.max) { this.setValue(this.max); }
    else this.setValue(value);
  }

  setFromInput(value) {
    if (!value || Number.isNaN(value) || value < this.min) {
      return this.setFromSlider(this.min);
    }

    let stringValue = value.toString();
    while (stringValue.charAt(0) === '0') { stringValue = stringValue.substr(1); }
    return this.setFromSlider(Number(stringValue));
  }
}

export class EVRangingNumber extends RangingNumber implements IRangingNumber {
  constructor(initialValue: number = 0,
              min: number = 0,
              max: number = 100,
              public allStatsRef: Stats) {
    super(initialValue, min, max);
    this.allStatsRef = allStatsRef;
  }

  setFromSlider(evs: number): void {
    const originalEvs = this.getValue();
    super.setFromSlider(evs);
    if (evs > originalEvs) {
      // calc the evsum, so we can see if the value exceeds the MAX_EVS_TOTAL
      this.allStatsRef.calculateEvSum();
      // otherwise calc the space between the new and the current evs
      const evSum = this.allStatsRef.getEvSum();
      const diff = Math.abs(this.getValue() - evs); // how much is the new evs-value bigger than the previous value
      // and check if the added points will overflow the MAX_EVS
      if (evSum + diff <= MAX_EVS_TOTAL) {
        this.setValue(evs);
        // if it would overflow, add as much as there is space
      } else {
        this.setValue(this.getValue() + MAX_EVS_TOTAL - evSum);
      }
    }
    this.allStatsRef.calculateEvSum();
  }
}


