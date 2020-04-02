import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pd-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  @Input() name: string;

  @Input() open: boolean;

  constructor() {
    this.name = '';
    this.open = false;
  }

  ngOnInit(): void {
  }

}
