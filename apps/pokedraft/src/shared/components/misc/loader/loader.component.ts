import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pd-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() forButton: boolean;

  constructor() {
    this.forButton = false;
  }

  ngOnInit(): void {
  }

}
