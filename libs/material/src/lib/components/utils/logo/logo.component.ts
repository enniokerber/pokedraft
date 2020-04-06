import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pd-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() forFormContainer = false;

  constructor() { }

  ngOnInit(): void {
  }

}
