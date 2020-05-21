import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-dropdown',
  templateUrl: './pd-dropdown.component.html',
  styleUrls: ['./pd-dropdown.component.scss']
})
export class PdDropdownComponent implements OnInit {

  open = false;

  @Input()
  options: any[];

  @Input()
  selected = 'Hoolahoopa';

  @Input()
  title = '';

  @Output()
  selectedChange = new EventEmitter();

  @Output()
  change = new EventEmitter();


  triggerDropdown(): void {
    this.open = !this.open;
  }

  setValue(newValue): void {
    this.selected = newValue;
    this.selectedChange.emit(newValue);
    this.change.emit(newValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
