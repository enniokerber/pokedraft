import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMove} from "@pokedraft/teambuilder";

@Component({
  selector: 'moves-list-row-container',
  templateUrl: './moves-list-row-container.component.html',
  styleUrls: ['./moves-list-row-container.component.scss']
})
export class MovesListRowContainerComponent {

  @Input() moves: IMove[] = [];

  @Output() onchoose: EventEmitter<IMove> = new EventEmitter<IMove>();

  constructor() {}

  chooseMove(move: IMove): void {
    this.onchoose.emit(move);
  }

}
