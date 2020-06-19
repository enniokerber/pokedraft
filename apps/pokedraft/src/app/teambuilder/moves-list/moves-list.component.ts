import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {
  IMove,
  SubscriptionContainer,
  TeambuilderPokemonService,
  TeambuilderViewService,
  TeambuilderEventService,
  DividedTeambuilderEntityCollection,
  MOVE_DIVIDER_PROP,
  TeambuilderLanguageService,
  TeambuilderListMarkerForDividedEntityCollection,
  TeambuilderStoreService,
  TeambuilderPokemon
} from "@pokedraft/teambuilder";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'pd-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnDestroy {

  @ViewChild('moveListContainer') moveListContainerElement: ElementRef;

  loadingMoves = false;
  loadingError = false;

  moves: DividedTeambuilderEntityCollection<IMove>;

  marker: TeambuilderListMarkerForDividedEntityCollection<IMove>;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbEvents: TeambuilderEventService,
              private tbLanguage: TeambuilderLanguageService,
              private tbStore: TeambuilderStoreService) {
    this.moves = new DividedTeambuilderEntityCollection<IMove>([], MOVE_DIVIDER_PROP);
    this.marker = new TeambuilderListMarkerForDividedEntityCollection<IMove>(this.moves);
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedTeampokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          distinctUntilChanged((prev, curr) => (prev.teambuilderPokemonId === curr.teambuilderPokemonId && prev.name === curr.name)), // requires that no duplicate pokemon are allowed
        )
        .subscribe(pokemon => {
          this.scrollTop();
          this.moves.setEntities(this.getPokemonsMoves(pokemon));
          this.moves.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name', false);
          this.marker.reset();
        }),
      this.tbEvents.moveListEvents.search.changesNotEmpty$
        .pipe(debounceTime(250))
        .subscribe(move => this.moves.filterByString(move, this.tbLanguage.getCurrentLanguageAsProp())),
      this.tbEvents.moveListEvents.search.reset$
        .subscribe(_ => this.moves.filterByString('', this.tbLanguage.getCurrentLanguageAsProp())), // empty string resets it
      this.tbEvents.moveListEvents.up.subscribe(_ => this.marker.dec()),
      this.tbEvents.moveListEvents.down.subscribe(_ => this.marker.inc()),
      this.tbEvents.moveListEvents.selectMarked.subscribe(_ => {
        this.insertMove(this.marker.getMarkedEntity());
      }),
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  insertMove(move: IMove): void {
    this.tbPokemon.insertMove(move);
  }

  sortByName() {
    this.moves.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name');
  }

  sortByBasePower() {
    this.moves.sort('basePower');
  }

  getPokemonsMoves(pokemon: TeambuilderPokemon): IMove[] {
    return pokemon.getPossibleMoves()
      .map(moveId => this.tbStore.getMoveById(moveId))
      .filter(move => !!move);
  }

  scrollTop() {
    if (this.moveListContainerElement) {
      this.moveListContainerElement.nativeElement.scrollTop = 0;
    }
  }
}
