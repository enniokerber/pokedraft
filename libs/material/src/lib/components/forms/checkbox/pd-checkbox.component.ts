import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pd-checkbox',
  templateUrl: './pd-checkbox.component.html',
  styleUrls: ['./pd-checkbox.component.scss']
})
export class PdCheckboxComponent {

  @Input() checked: boolean;

  @Input() inputId: string;

  @Input() alignName: '' | 'top';

  @Input() disabled: boolean;

  @Output() checkedChange: EventEmitter<boolean>;

  @Output() check: EventEmitter<void>;

  @Output() uncheck: EventEmitter<void>;

  constructor() {
    this.checked = false;
    this.inputId = '';
    this.alignName = '';
    this.disabled = false;
    this.checkedChange = new EventEmitter<boolean>();
    this.check = new EventEmitter<void>();
    this.uncheck = new EventEmitter<void>();
  }

  onChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);

    if (checked === true)
      return this.check.emit();
    else
      return this.uncheck.emit();
  }
}
