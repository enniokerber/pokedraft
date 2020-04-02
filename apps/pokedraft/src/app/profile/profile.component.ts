import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() navbarOpen: boolean;

  constructor() {
    this.navbarOpen = true;
  }

  ngOnInit(): void {
  }

  toggleNavbar(newState: boolean): void {
    this.navbarOpen = newState;
  }

}
