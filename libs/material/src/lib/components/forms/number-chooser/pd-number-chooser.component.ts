import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-number-chooser',
  templateUrl: './pd-number-chooser.component.html',
  styleUrls: ['./pd-number-chooser.component.scss']
})
export class PdNumberChooserComponent implements OnInit {

  @Input()
  value;

  @Input()
  name;

  @Input()
  min = 0;

  @Input()
  max = 99;

  @Input()
  stepsize = 1;

  @Output()
  valueChange = new EventEmitter();


  incValue(): void {
    const max = this.max;
    const stepsize = this.stepsize;
    this.value = (this.value === max) ? max : this.value + stepsize;
    this.emitValue();
  }

  decValue(): void {
    const min = this.min;
    const stepsize = this.stepsize;
    this.value = (this.value === min) ? min : this.value - stepsize;
    this.emitValue();
  }

  emitValue(): void {
    this.valueChange.emit(this.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
