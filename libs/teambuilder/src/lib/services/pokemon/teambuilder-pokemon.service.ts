import {Injectable, OnDestroy} from '@angular/core';
import {
  IAbility, IMove, IPokemon, BehaviorSubjectStream,
  TeambuilderPokemon, IItem, SubscriptionContainer, Container
} from "../../models";
import {TeambuilderEventService} from "../event/teambuilder-event.service";
import {TeambuilderViewService} from "../view/teambuilder-view.service";
import {distinctUntilChanged} from "rxjs/operators";


@Injectable()
export class TeambuilderPokemonService implements OnDestroy {

  private readonly _team: BehaviorSubjectStream<TeambuilderPokemon[]>;
  private readonly _selectedTeampokemon: BehaviorSubjectStream<TeambuilderPokemon>;
  private readonly _nextMoveslot: BehaviorSubjectStream<number>;

  private readonly _subscriptions: SubscriptionContainer;

  constructor(private tbEvents: TeambuilderEventService,
              private tbView: TeambuilderViewService) {
    this._team = new BehaviorSubjectStream<TeambuilderPokemon[]>([]);
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

  get team(): BehaviorSubjectStream<TeambuilderPokemon[]> {
    return this._team;
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
    return this.team.getValue().length;
  }

  addTeampokemon(fromInterface: IPokemon) {
    const team = this.team.getValue();
    if (team.length < 6) {
      const nextId = this.getNextId();
      const pokemon = new TeambuilderPokemon(fromInterface, nextId);
      team.push(pokemon);
      this.triggerTeamChangeListeners(); // notifies listeners on the updated team, so for ex: statistics are recalculated
      this.selectTeampokemon(pokemon);
      this.tbView.displayItemList();
    }
  }

  // trigger on team change listeners
  triggerTeamChangeListeners(): void {
    this.team.update(this.team.getValue());
  }

  deleteTeampokemon(id: number): void {
    this.team.update(
      this.team.getValue()
        .filter(pokemon => pokemon.getTeambuilderId() !== id)
        .map((pokemon, index) => {
          pokemon.setTeambuilderId(index);
          return pokemon;
        })
    );
    const team = this.team.getValue();
    const selectedTeamPokemon = this.selectedTeampokemon.getValue();
    if (selectedTeamPokemon !== null && selectedTeamPokemon.getTeambuilderId() === id) {
      const count = team.length;
      if (count > id) {
        this.selectTeampokemon(team[id]);
      } else if (count > 0) {
        this.selectTeampokemon(team[count - 1]);
      } else {
        this.selectTeampokemon(null);
      }
    }
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
      this.triggerTeamChangeListeners(); // notifies listeners on the updated team, so for ex: statistics are recalculated
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
    }
  }

  moveSetFull(): boolean {
    return this.selectedTeampokemon.getValue()
      .getMoves()
      .every(isSet => !!isSet); // every move is set
  }

  resetSearchMove() {
    this.tbEvents.moveListEvents.search.reset();
  }

  deselectFocusedMove() {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.moves[this.nextMoveslot.getValue()].setData(null);
    this.selectTeampokemon(currentTeampokemon);
    this.triggerTeamChangeListeners(); // move was changed, so recalc statistics
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
