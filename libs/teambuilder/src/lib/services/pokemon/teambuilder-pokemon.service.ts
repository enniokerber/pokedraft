import {Injectable, OnDestroy} from '@angular/core';
import {
  IAbility,
  IMove,
  IPokemon,
  BehaviorSubjectStream,
  TeambuilderPokemon,
  IItem,
  SubscriptionContainer,
  Container,
  ITeambuilderPokemon,
  Genders,
  ITeambuilderTeam,
  TeambuilderPokemonArray
} from '../../models';
import {TeambuilderEventService} from "../event/teambuilder-event.service";
import {TeambuilderViewService} from "../view/teambuilder-view.service";
import { TeambuilderStoreService } from '../store/teambuilder-store.service';
import {distinctUntilChanged} from "rxjs/operators";
import { MAX_HAPPINESS, MAX_LEVEL } from '../../data';


@Injectable()
export class TeambuilderPokemonService implements OnDestroy {

  public teamId: string;
  private readonly _currentTeampokemon: BehaviorSubjectStream<TeambuilderPokemon[]>;
  private readonly _selectedPokemon: BehaviorSubjectStream<TeambuilderPokemon>;
  private readonly _nextMoveslot: BehaviorSubjectStream<number>;

  private readonly _subscriptions: SubscriptionContainer;

  constructor(private tbEvents: TeambuilderEventService,
              private tbView: TeambuilderViewService,
              private tbStore: TeambuilderStoreService) {
    this.teamId = '';
    this._currentTeampokemon = new BehaviorSubjectStream<TeambuilderPokemon[]>([]);
    this._selectedPokemon = new BehaviorSubjectStream<TeambuilderPokemon>(null);
    this._nextMoveslot = new BehaviorSubjectStream<number>(-1);
    this._subscriptions = new SubscriptionContainer(
      this._selectedPokemon.changes$
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

  get currentTeampokemon(): BehaviorSubjectStream<TeambuilderPokemon[]> {
    return this._currentTeampokemon;
  }

  get selectedPokemon(): BehaviorSubjectStream<TeambuilderPokemon> {
    return this._selectedPokemon;
  }

  get nextMoveslot(): BehaviorSubjectStream<number> {
    return this._nextMoveslot;
  }

  getTeamId(): string { return this.teamId; }

  setTeamId(id: string): void {this.teamId = id; }

  setTeam(team: ITeambuilderTeam): void {
    if (!team) return;
    this.setTeamId(team.id);
    const pokemon: TeambuilderPokemonArray = team.pokemon.map((p: ITeambuilderPokemon, index: number) => this.createTeambuilderPokemonFromDBRecord(p, index)) || [];
    this.currentTeampokemon.update(pokemon);
    if (pokemon.length > 0) {
      this.selectTeampokemon(pokemon[0]);
      this.tbView.displayItemList();
    }
  }

  selectTeampokemon(pokemon: TeambuilderPokemon) {
    this.selectedPokemon.update(pokemon);
  }

  getNextId(): number {
    return this.currentTeampokemon.getValue().length;
  }

  addTeampokemon(fromInterface: IPokemon) {
    const team = this.currentTeampokemon.getValue();
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
    // as the same value as before is passed again, change detection will detect that and thus not rerender the whole view
    this.currentTeampokemon.update(this.currentTeampokemon.getValue());
  }

  deleteTeampokemon(id: number): void {
    this.currentTeampokemon.update(
      this.currentTeampokemon.getValue()
        .filter(pokemon => pokemon.getTeambuilderId() !== id)
        .map((pokemon, index) => {
          pokemon.setTeambuilderId(index);
          return pokemon;
        })
    );
    const team = this.currentTeampokemon.getValue();
    const selectedTeamPokemon = this.selectedPokemon.getValue();
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
    const currentPokemon = this.selectedPokemon.getValue();
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
      const currentTeampokemon = this.selectedPokemon.getValue();
      const selectedMoveslot = this.nextMoveslot.getValue();
      currentTeampokemon.moves[selectedMoveslot].setData(move);
      this.selectTeampokemon(currentTeampokemon);
      this.triggerTeamChangeListeners(); // notifies listeners on the updated team, so for ex: statistics are recalculated
    }
  }

  insertMove(move: IMove) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (!currentTeampokemon.getMoves().includes(move)) {
      this.setCurrentMoveslotData(move);
      this.selectNextMoveslot();
      if (!currentTeampokemon.movesWereFilled() && currentTeampokemon.moveSetFull()) {
        currentTeampokemon.markMovesFilled();
        this.tbView.displayStats();
      }
    }
  }

  resetSearchMove() {
    this.tbEvents.moveListEvents.search.reset();
  }

  deselectFocusedMove() {
    const currentTeampokemon = this.selectedPokemon.getValue();
    currentTeampokemon.moves[this.nextMoveslot.getValue()].setData(null);
    this.selectTeampokemon(currentTeampokemon);
    this.triggerTeamChangeListeners(); // move was changed, so recalc statistics
  }

  // ITEM

  updateSelectedPokemonsItem(item: IItem) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (currentTeampokemon.item !== item) {
      currentTeampokemon.setItem(item);
      this.selectTeampokemon(currentTeampokemon);
      this.triggerTeamChangeListeners();
      this.tbView.displayAbilitiesList();
    }
  }

  // ABILITY

  updateSelectedPokemonsAbility(ability: IAbility) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (currentTeampokemon.ability !== ability) {
      currentTeampokemon.setAbility(ability);
      this.selectTeampokemon(currentTeampokemon);
      this.tbView.displayMoveList();
      this.triggerTeamChangeListeners();
      this.selectNextEmptyMoveslot();
    }
  }

  // MANAGE
  getTeamAsDatabaseRecord(): ITeambuilderPokemon[] {
    return this.currentTeampokemon.getValue().map(pokemon => pokemon.toDatabaseRecord());
  }

  createTeambuilderPokemonFromDBRecord(record: ITeambuilderPokemon, teambuilderId?: number): TeambuilderPokemon {
    const tbPokemon = new TeambuilderPokemon(this.tbStore.getPokemonById(record.id), teambuilderId);
    tbPokemon.setNickname(record.nickname || '');
    tbPokemon.setLevel(record.level || MAX_LEVEL);
    tbPokemon.setHappiness(record.happiness || MAX_HAPPINESS);
    tbPokemon.setGender(record.gender || Genders.RANDOM);
    tbPokemon.setShiny(typeof record.shiny === 'undefined' ? false : record.shiny);
    tbPokemon.changeNatureById(record.nature || 0);
    tbPokemon.setItem(this.tbStore.getItemById(record.item) || null);
    tbPokemon.setAbility(this.tbStore.getAbilityById(record.ability) || null);
    tbPokemon.setMoves(this.tbStore.getMovesByIds(record.moves) || []);
    if (tbPokemon.moveSetFull()) { tbPokemon.markMovesFilled(); }
    tbPokemon.stats.setEvsAndDvs(record.evs || {}, record.dvs || {});
    return tbPokemon;
  }
}
