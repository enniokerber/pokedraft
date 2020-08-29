import { Component, Input } from '@angular/core';

@Component({
  selector: 'pd-item-icon',
  templateUrl: './item-icon.component.html'
})
export class ItemIconComponent {

  @Input() item: string;

  constructor() { }

}
