import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMove, TeambuilderPokemonService } from '@pokedraft/teambuilder';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'moves-list-row-container',
  templateUrl: './moves-list-row-container.component.html',
  styleUrls: ['./moves-list-row-container.component.scss']
})
export class MovesListRowContainerComponent {

  @Input() moves: IMove[];

  @Input() markedId: number;

  @Output() choose: EventEmitter<IMove>;

  moveset$: Observable<IMove[]>;

  constructor(public tbPokemon: TeambuilderPokemonService) {
    this.moves = [];
    this.markedId = -1;
    this.choose = new EventEmitter<IMove>();
    this.moveset$ = this.tbPokemon.selectedPokemon.changes$
      .pipe(
        map(pokemon => pokemon ? pokemon.getMoves() : [])
      );
  }

  chooseMove(move: IMove): void {
    this.choose.emit(move);
  }

}
