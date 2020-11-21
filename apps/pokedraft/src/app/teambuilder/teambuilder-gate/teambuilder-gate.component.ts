import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-teambuilder-gate',
  templateUrl: './teambuilder-gate.component.html',
  styleUrls: ['./teambuilder-gate.component.scss']
})
export class TeambuilderGateComponent implements OnInit {

  openingEditor: boolean;

  constructor(private router: Router) {
    this.openingEditor = false;
  }

  ngOnInit(): void {
    this.openingEditor = true;
    this.router.navigateByUrl('teambuilder/editor').finally(() => this.openingEditor = false);
  }

}
