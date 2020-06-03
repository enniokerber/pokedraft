import {Injectable, OnDestroy} from '@angular/core';

import {IAbility, IMove, IPokemon, BehaviorSubjectStream, TeambuilderPokemon, IItem,
  SubscriptionContainer, Container
} from "../../models";
import {TeambuilderEventService} from "../event/teambuilder-event.service";
import {TeambuilderViewService} from "../view/teambuilder-view.service";
import {distinctUntilChanged} from "rxjs/operators";


@Injectable()
export class TeambuilderPokemonService implements OnDestroy {

  private _teampokemon: TeambuilderPokemon[];
  private readonly _selectedTeampokemon: BehaviorSubjectStream<TeambuilderPokemon>;
  private readonly _nextMoveslot: BehaviorSubjectStream<number>;

  private readonly _subscriptions: SubscriptionContainer;

  constructor(private tbEvents: TeambuilderEventService,
              private tbView: TeambuilderViewService) {
    this._teampokemon = [];
    this._selectedTeampokemon = new BehaviorSubjectStream<TeambuilderPokemon>(null);
    this._nextMoveslot = new BehaviorSubjectStream<number>(-1);
    this._subscriptions = new SubscriptionContainer(
      this._selectedTeampokemon.changes$
        .pipe(distinctUntilChanged())
        .subscribe(pokemon => {
          if (!pokemon) {
            this.tbView.displayRawPokemonList();
          }
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribeAll();
  }

  get teampokemon(): TeambuilderPokemon[] {
    return this._teampokemon;
  }

  set teampokemon(value: TeambuilderPokemon[]) {
    this._teampokemon = value;
  }

  get selectedTeampokemon(): BehaviorSubjectStream<TeambuilderPokemon> {
    return this._selectedTeampokemon;
  }

  get nextMoveslot(): BehaviorSubjectStream<number> {
    return this._nextMoveslot;
  }

  selectTeampokemon(pokemon: TeambuilderPokemon) {
    this.selectedTeampokemon.update(pokemon);
  }

  getNextId(): number {
    return this.teampokemon.length;
  }

  addTeampokemon(fromInterface: IPokemon) {
    if (this.teampokemon.length < 6) {
      const nextId = this.getNextId();
      const pokemon = new TeambuilderPokemon(fromInterface, nextId);
      this.teampokemon.push(pokemon);
      this.selectTeampokemon(pokemon);
      this.tbView.displayItemList();
    }
  }

  refactorTeambuilderPokemonsIDs(): void {
    this.teampokemon = this.teampokemon.map(
      (pokemon, index) => {
        pokemon.teambuilderPokemonId = index;
        return pokemon;
      }
    );
  }

  // TODO: Check if refactorTeambuilderPokemonsIDs() causes bugs within the teambuilderIds in selectedPokemon
  deleteTeampokemon(id: number): TeambuilderPokemon[] {
    this.teampokemon = this.teampokemon.filter(pokemon => pokemon.teambuilderPokemonId !== id);
    const selectedTeamPokemon = this.selectedTeampokemon.getValue();
    this.refactorTeambuilderPokemonsIDs();
    if (selectedTeamPokemon !== null && selectedTeamPokemon.teambuilderPokemonId === id) {
      const count = this.teampokemon.length;
      if (count > id) {
        this.selectTeampokemon(this.teampokemon[id]);
      } else if (count > 0) {
        this.selectTeampokemon(this.teampokemon[count - 1]);
      } else {
        this.selectTeampokemon(null);
      }
    }
    return this.teampokemon;
  }


  // MOVES

  private isValidMoveslot(id: number) {
    return id >= 0 && id < 4;
  }

  setNextMoveslot(id: number) {
    if (this.isValidMoveslot(id)) {
      this.nextMoveslot.update(id);
      this.resetSearchMove();
    }
  }

  selectNextMoveslot() {
    const currentMoveslot = this.nextMoveslot.getValue();
    const nextMoveSlot = currentMoveslot >= 3 ? 0 : currentMoveslot + 1;
    this.setNextMoveslot(nextMoveSlot);
  }

  selectNextEmptyMoveslot() {
    const currentPokemon = this.selectedTeampokemon.getValue();
    const moves: Container[] = currentPokemon.moves;
    for (let moveId = 0; moveId < moves.length; moveId++) {
      if (moves[moveId].getData() === null) {
        return this.setNextMoveslot(moveId);
      }
    }
    this.setNextMoveslot(0);
  }

  setCurrentMoveslotData(move: IMove): void {
    if (this.isValidMoveslot(this.nextMoveslot.getValue())) {
      const currentTeampokemon = this.selectedTeampokemon.getValue();
      const selectedMoveslot = this.nextMoveslot.getValue();
      currentTeampokemon.moves[selectedMoveslot].setData(move);
      this.selectTeampokemon(currentTeampokemon);
    }
  }

  insertMove(move: IMove) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    if (!currentTeampokemon.moves.map(container => container.data).includes(move)) {
      this.setCurrentMoveslotData(move);
      this.selectNextMoveslot();
      if (!currentTeampokemon.movesWereFilled() && this.moveSetFull()) {
        currentTeampokemon.markMovesFilled();
        this.tbView.displayStats();
      }
    } else {
      console.log('This move is already on the set');
    }
  }

  moveSetFull(): boolean {
    return this.selectedTeampokemon.getValue()
      .getMoves()
      .every(mc => !!mc.data); // every move is set
  }

  resetSearchMove() {
    this.tbEvents.moveListEvents.search.reset();
  }

  deselectFocusedMove() {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.moves[this.nextMoveslot.getValue()].setData(null);
    this.selectTeampokemon(currentTeampokemon);
  }

  updateSelectedPokemonsMoves(moves: IMove[]) {
    const selectedPokemon = this.selectedTeampokemon.getValue();
    if (selectedPokemon !== null) {
      selectedPokemon.possibleMoves = moves;
      this.selectTeampokemon(selectedPokemon);
    }
  }

  // ITEM

  updateSelectedPokemonsItem(item: IItem) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    if (currentTeampokemon.item !== item) {
      currentTeampokemon.setItem(item);
      this.selectTeampokemon(currentTeampokemon);
      this.tbView.displayAbilitiesList();
    }
  }

  // ABILITY

  updateSelectedPokemonsAbility(ability: IAbility) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    if (currentTeampokemon.ability !== ability) {
      currentTeampokemon.setAbility(ability);
      this.selectTeampokemon(currentTeampokemon);
      this.tbView.displayMoveList();
      this.selectNextEmptyMoveslot();
    }
  }
}
