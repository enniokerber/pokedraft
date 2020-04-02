import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pd-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() navbarOpen: boolean;

  @Input() showBurgerMenu: boolean;

  @Input() showQuagior: boolean;

  @Output() menuToggle: EventEmitter<boolean>;

  constructor() {
    this.navbarOpen = false;
    this.showBurgerMenu = true;
    this.showQuagior = true;
    this.menuToggle = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  burgerMenuToggled(value: boolean): void {
    this.menuToggle.emit(value);
  }
}
