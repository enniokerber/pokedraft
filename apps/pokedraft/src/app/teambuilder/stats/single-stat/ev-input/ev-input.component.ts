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

  max = MAX_EVS_PER_STAT;
  stepsize = EV_STEPS;

  constructor() { }

  value(): number {
    return this.stat.getEvs();
  }

  setValue(value: number) {
    this.stat.setEvsFromInput(value);
  }

  incValue(): void {
    if (this.stat.cannotGoHigher()) return;
    this.setValue((this.value() === this.max) ? this.max : this.value() + this.stepsize);
  }

  decValue(): void {
    this.setValue((this.value() === 0) ? 0 : this.value() - this.stepsize);
  }

  updateAndValidateEvs(value) {
    this.setValue(value);
    this.setInputValue();
  }

  // manually set input value, so no invalid values can be inserted
  setInputValue() {
    (this.elem?.nativeElement as HTMLInputElement).value = this.value().toString();
  }

}
