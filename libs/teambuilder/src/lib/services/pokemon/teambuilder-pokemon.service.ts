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
  ITeambuilderTeam,
  TeambuilderPokemonArray,
  TeambuilderTeam
} from '../../models';
import {TeambuilderEventService} from "../event/teambuilder-event.service";
import {TeambuilderViewService} from "../view/teambuilder-view.service";
import { TeambuilderStoreService } from '../store/teambuilder-store.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokedraftAuthService } from '@pokedraft/core';


@Injectable()
export class TeambuilderPokemonService implements OnDestroy {

  team: BehaviorSubjectStream<TeambuilderTeam>;
  currentTeampokemon$: Observable<TeambuilderPokemon[]>;
  selectedPokemon: BehaviorSubjectStream<TeambuilderPokemon>;
  nextMoveslot: BehaviorSubjectStream<number>;

  private readonly subscriptions: SubscriptionContainer;

  constructor(private tbEvents: TeambuilderEventService,
              private tbView: TeambuilderViewService,
              private tbStore: TeambuilderStoreService,
              private auth: PokedraftAuthService) {
    this.team = new BehaviorSubjectStream<TeambuilderTeam>(this.newTeam());
    this.currentTeampokemon$ = this.team.changes$.pipe(map(team => team?.getPokemon() || []));
    this.selectedPokemon = new BehaviorSubjectStream<TeambuilderPokemon>(null);
    this.nextMoveslot = new BehaviorSubjectStream<number>(-1);
    this.subscriptions = new SubscriptionContainer(
      this.selectedPokemon.changes$
        .pipe(distinctUntilChanged())
        .subscribe(pokemon => {
          if (!pokemon) {
            this.tbView.displayRawPokemonList();
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  private newTeam(): TeambuilderTeam {
    const currentUser = this.auth.getCurrentUserSnippet();
    return TeambuilderTeam.forUser(currentUser);
  }

  getTeamId(): string { return this.team.getValue().getId(); }

  setTeamId(id: string): void { this.team.getValue().setId(id); }

  getTeam(): TeambuilderTeam { return this.team.getValue(); }

  setTeam(record: ITeambuilderTeam): void {
    if (!record) return;
    const team = TeambuilderTeam.fromDatabaseRecord(record);
    const pokemon: TeambuilderPokemonArray = record.pokemon.map((p: ITeambuilderPokemon, index: number) => this.createTeambuilderPokemonFromDBRecord(p, index)) || [];
    team.setPokemon(pokemon);
    this.team.update(team);
    if (pokemon.length > 0) {
      this.selectTeampokemon(pokemon[0]);
      this.tbView.displayItemList();
    }
  }

  getCurrentTeampokemon(): TeambuilderPokemon[] { return this.team.getValue().getPokemon(); }

  updateCurrentTeampokemon(pokemon: TeambuilderPokemon[]) {
    const team = this.team.getValue();
    team.setPokemon(pokemon);
    this.notifyTeamChangeListeners();
  }

  selectTeampokemon(pokemon: TeambuilderPokemon) {
    this.selectedPokemon.update(pokemon);
  }

  getNextId(): number {
    return this.getCurrentTeampokemon().length;
  }

  addTeampokemon(fromInterface: IPokemon) {
    const team = this.getCurrentTeampokemon();
    if (team.length < 6) {
      const nextId = this.getNextId();
      const pokemon = new TeambuilderPokemon(fromInterface, nextId);
      team.push(pokemon);
      this.notifyTeamChangeListeners(); // notifies listeners on the updated team, so for ex: statistics are recalculated
      this.selectTeampokemon(pokemon);
      this.tbView.displayItemList();
    }
  }

  notifyTeamChangeListeners(): void {
    // as the same value as before is passed again, change detection will detect that and thus not rerender the whole view
    this.team.update(this.team.getValue());
  }

  deleteTeampokemon(id: number): void {
    this.updateCurrentTeampokemon(
      this.getCurrentTeampokemon()
        .filter(pokemon => pokemon.getTeambuilderId() !== id)
        .map((pokemon, index) => {
          pokemon.setTeambuilderId(index);
          return pokemon;
        })
    );
    const team = this.getCurrentTeampokemon();
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
      this.notifyTeamChangeListeners(); // notifies listeners on the updated team, so for ex: statistics are recalculated
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
    this.notifyTeamChangeListeners(); // move was changed, so recalc statistics
  }

  // ITEM

  updateSelectedPokemonsItem(item: IItem) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (currentTeampokemon.item !== item) {
      currentTeampokemon.setItem(item);
      this.selectTeampokemon(currentTeampokemon);
      this.notifyTeamChangeListeners();
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
      this.notifyTeamChangeListeners();
      this.selectNextEmptyMoveslot();
    }
  }

  // MANAGE
  getTeampokemonAsDatabaseRecords(): ITeambuilderPokemon[] {
    return this.getCurrentTeampokemon().map(pokemon => pokemon.toDatabaseRecord());
  }

  createTeambuilderPokemonFromDBRecord(record: ITeambuilderPokemon, teambuilderId?: number): TeambuilderPokemon {
    const tbPokemon = new TeambuilderPokemon(this.tbStore.getPokemonById(record.id), teambuilderId);
    tbPokemon.setNickname(record.nickname);
    tbPokemon.setLevel(record.level);
    tbPokemon.setHappiness(record.happiness);
    tbPokemon.setGender(record.gender);
    tbPokemon.setShiny(record.shiny);
    tbPokemon.changeNatureById(record.nature);
    tbPokemon.setItem(this.tbStore.getItemById(record.item));
    tbPokemon.setAbility(this.tbStore.getAbilityById(record.ability));
    tbPokemon.setMoves(this.tbStore.getMovesByIds(record.moves));
    if (tbPokemon.moveSetFull()) { tbPokemon.markMovesFilled(); }
    tbPokemon.stats.setEvsAndDvs(record.evs, record.dvs);
    return tbPokemon;
  }
}
