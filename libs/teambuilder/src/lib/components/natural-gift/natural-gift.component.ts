import { Component, Input } from '@angular/core';
import { INaturalGift } from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-natural-gift',
  templateUrl: './natural-gift.component.html',
  styleUrls: []
})
export class NaturalGiftComponent {

  @Input() naturalGift: INaturalGift;

  constructor() {
    this.naturalGift = null;
  }

}
