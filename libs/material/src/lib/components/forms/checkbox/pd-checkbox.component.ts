import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-checkbox',
  templateUrl: './pd-checkbox.component.html',
  styleUrls: ['./pd-checkbox.component.scss']
})
export class PdCheckboxComponent implements OnInit {

  @Input()
  checked;

  @Input()
  name;

  @Input()
  alignName = '';

  @Input()
  disabled = false;

  @Output()
  checkedChange = new EventEmitter();


  onChange(new_value): void {
    this.checked = new_value;
    this.checkedChange.emit(new_value);
  }

  constructor() { }

  ngOnInit() {
  }

}
