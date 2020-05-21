import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IMove,
  SubscriptionContainer,
  TeambuilderPokemonService,
  TeambuilderViewService, testMoves,
  TeambuilderEventService,
  DividedTeambuilderEntityCollection
} from "@pokedraft/teambuilder";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit, OnDestroy {

  loadingMoves = false;
  loadingError = false;

  moves: DividedTeambuilderEntityCollection<IMove>;

  private subscriptions: SubscriptionContainer = new SubscriptionContainer();

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbEvents: TeambuilderEventService) {
    this.moves = new DividedTeambuilderEntityCollection<IMove>(testMoves, 'isViable');
    this.subscriptions.add(
      this.tbPokemon.selectedTeampokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          distinctUntilChanged((prev, curr) => (prev.teambuilderPokemonId === curr.teambuilderPokemonId && prev.name === curr.name)), // requires that no duplicate pokemon are allowed
        )
        .subscribe(pokemon => { }),
      this.tbEvents.searchMove.changes$
        .pipe(
          filter(searchString => searchString !== ''),
          distinctUntilChanged(),
          debounceTime(250),
        )
        .subscribe(move => this.moves.filterByString(move, 'german')),
      this.tbEvents.searchMove.changes$
        .pipe(
          filter(searchString => !searchString || searchString === ''),
          debounceTime(0),
        )
        .subscribe(move => this.moves.filterByString(move, 'german'))
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  insertMove(move: IMove): void {
    this.tbPokemon.insertMove(move);
  }
}
