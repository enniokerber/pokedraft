import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Stat} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-single-stat',
  templateUrl: './single-stat.component.html',
  styleUrls: ['./single-stat.component.scss']
})
export class SingleStatComponent {

  @ViewChild('evInput') elem: ElementRef;

  // the single stats data
  @Input() stat: Stat;

  constructor() {
    this.stat = null;
  }

  setEvs(value: string | number) {
    this.stat.setEvsFromSlider(Number(value));
    // this prevents the slider from going beyond the maximum EV mark
    if (this.stat.cannotGoHigher()) {
      (this.elem?.nativeElement as HTMLInputElement).value = this.stat.getEvs().toString();
    }
  }

  calculateStat() {
    this.stat.update();
  }

}
