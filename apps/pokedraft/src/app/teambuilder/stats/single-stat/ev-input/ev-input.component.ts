import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {EV_STEPS, MAX_EVS_PER_STAT, Stat} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-ev-input',
  templateUrl: './ev-input.component.html',
  styleUrls: ['./ev-input.component.scss']
})
export class EvInputComponent {

  @ViewChild('evInput') elem: ElementRef;

  @Input() stat: Stat;

  min = 0;
  max = MAX_EVS_PER_STAT;
  stepsize = EV_STEPS;

  constructor() { }

  value(): number {
    return this.stat.getEvs();
  }

  setValue(value: number) {
    this.stat.setEvsFromSlider(value);
  }

  evSumMaxed(): boolean {
    return this.stat.allStats.isEvSumMaxed();
  }

  remaining(): number {
    return this.stat.allStats.getRemainingEVs();
  }

  incValue(): void {
    if (this.evSumMaxed()) return;
    this.setValue((this.value() === this.max) ? this.max : this.value() + this.stepsize);
  }

  decValue(): void {
    this.setValue((this.value() === this.min) ? this.min : this.value() - this.stepsize);
  }

  checkValidity(value) {
    // if invalid value, set to min and return
    if (Number.isNaN(value) || !value || value < this.min) {
      this.setValue(this.min);
      return this.setInputValue();
    }

    // value = Number(value);

    // is value greater than allowed, then set to max
    /*
    if (this.max < value) {
      this.setValue(this.max);
    } else {
      this.setValue(value);
    } */
    // this.setValue(value); // handles max validation and adds only as much as there is space left

    let stringValue = value.toString();

    while (stringValue.charAt(0) === '0') { stringValue = stringValue.substr(1); }
    this.setValue(Number(stringValue));
    this.setInputValue();
  }

  // manually set input value, so no invalid values can be inserted
  setInputValue() {
    (this.elem?.nativeElement as HTMLInputElement).value = this.value().toString();
  }

}
