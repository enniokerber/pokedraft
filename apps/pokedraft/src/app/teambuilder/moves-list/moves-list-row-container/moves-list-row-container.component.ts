import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMove} from "@pokedraft/teambuilder";

@Component({
  selector: 'moves-list-row-container',
  templateUrl: './moves-list-row-container.component.html',
  styleUrls: ['./moves-list-row-container.component.scss']
})
export class MovesListRowContainerComponent {

  @Input() moves: IMove[];

  @Input() markedId: number;

  @Output() choose: EventEmitter<IMove>;

  constructor() {
    this.moves = [];
    this.markedId = -1;
    this.choose = new EventEmitter<IMove>();
  }

  chooseMove(move: IMove): void {
    this.choose.emit(move);
  }

}
