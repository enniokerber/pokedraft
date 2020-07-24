import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Stat } from '@pokedraft/teambuilder';
import { PdNumberChooser2Component } from '@pokedraft/material';

@Component({
  selector: 'pd-dv-input',
  templateUrl: './dv-input.component.html',
  styleUrls: ['./dv-input.component.scss']
})
export class DvInputComponent implements OnInit {

  @ViewChild('dvChooser') elem: PdNumberChooser2Component;

  @Input() stat: Stat;

  constructor() {
    this.stat = null;
  }

  ngOnInit(): void {
  }

  setDvs(value) {
    this.stat.dvs.setFromInput(value);
    this.setInputValue();
    this.stat.update();
  }

  // manually set input value, so no invalid values can be inserted
  setInputValue() {
    this.elem.setInputValue(this.stat.dvs.getValue());
  }
}
