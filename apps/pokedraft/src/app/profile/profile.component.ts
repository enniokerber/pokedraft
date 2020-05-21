import {Component, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'pd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() navbarOpen: boolean;

  constructor(titleService: Title) {
    this.navbarOpen = true;
    titleService.setTitle('Pokédraft - Profile');
  }

  ngOnInit(): void {
  }

  toggleNavbar(newState: boolean): void {
    this.navbarOpen = newState;
  }

}
