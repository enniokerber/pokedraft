import { Component, Input } from '@angular/core';
import { IMove } from '../../models';

@Component({
  selector: 'pd-move-input-dummy',
  templateUrl: './move-input-dummy.component.html',
  styleUrls: []
})
export class MoveInputDummyComponent {

  @Input() move: IMove;

  constructor() {
    this.move = null;
  }

}
