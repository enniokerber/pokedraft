import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pd-league-navbar',
  templateUrl: './league-navbar.component.html',
  styleUrls: ['./league-navbar.component.scss']
})
export class LeagueNavbarComponent implements OnInit {

  @Input() open: boolean;

  constructor() {
    this.open = false;
  }

  ngOnInit(): void {
  }

}
