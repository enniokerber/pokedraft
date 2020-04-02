import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  @Input() active: boolean;

  @Output() toggle: EventEmitter<boolean>;

  constructor() {
    this.active = false;
    this.toggle = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  click(): void {
    this.toggle.emit(!this.active);
  }
}
