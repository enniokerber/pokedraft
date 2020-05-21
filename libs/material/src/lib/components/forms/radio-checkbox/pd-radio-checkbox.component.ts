import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pd-radio-checkbox',
  templateUrl: './pd-radio-checkbox.component.html',
  styleUrls: ['./pd-radio-checkbox.component.scss']
})
export class PdRadioCheckboxComponent {

  @Input()
  checked;

  @Input()
  name;

  @Input()
  onSmallScreen;

  @Input()
  locked;

  @Output()
  checkedChange: EventEmitter<boolean>;

  constructor() {
    this.checkedChange = new EventEmitter<boolean>();
  }

  changeValue(value: boolean): void {
    this.checked = value;
    this.checkedChange.emit(value);
  }

}
