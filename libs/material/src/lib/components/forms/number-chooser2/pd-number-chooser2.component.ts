import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-number-chooser2',
  templateUrl: './pd-number-chooser2.component.html',
  styleUrls: ['./pd-number-chooser2.component.scss']
})
export class PdNumberChooser2Component implements OnInit {

  @Input()
  value;

  @Input()
  extra = 0;

  @Input()
  min = 0;

  @Input()
  max = 99;

  @Input()
  stepsize = 1;

  @Input()
  disabled = false;

  @Input()
  darker;

  @Output()
  valueChange = new EventEmitter();

  @Output()
  change = new EventEmitter();


  incValue(): void {
    if (!this.disabled) {
      const max = this.max;
      const stepsize = this.stepsize;
      this.value = (this.value === max) ? max : this.value + stepsize;
      this.emitValue();
    }
  }

  decValue(): void {
    if (!this.disabled) {
      const min = this.min;
      const stepsize = this.stepsize;
      this.value = (this.value === min) ? min : this.value - stepsize;
      this.emitValue();
    }
  }

  emitValue(): void {
    this.valueChange.emit(this.value);
    this.change.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
