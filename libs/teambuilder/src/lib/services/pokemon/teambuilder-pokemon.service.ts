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
import {TeambuilderLanguageService} from "../language/teambuilder-language.service";
import { map } from 'rxjs/operators';
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
              private tbLang: TeambuilderLanguageService,
              private auth: PokedraftAuthService) {
    this.team = new BehaviorSubjectStream<TeambuilderTeam>(this.newTeam());
    this.currentTeampokemon$ = this.team.changes$.pipe(map(team => team?.getPokemon() || []));
    this.selectedPokemon = new BehaviorSubjectStream<TeambuilderPokemon>(null);
    this.nextMoveslot = new BehaviorSubjectStream<number>(-1);
    this.subscriptions = new SubscriptionContainer(
      this.selectedPokemon.changes$
        .subscribe(pokemon => {
          if (!pokemon) {
            this.tbView.displayRawPokemonList();
          }
          this.notifyTeamChangeListeners(); // used to recalculate statistics for ex.
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

  getTeam(): TeambuilderTeam { return this.team.getValue(); }

  setTeam(record: ITeambuilderTeam): void {
    if (!record) return;
    const team = TeambuilderTeam.fromDatabaseRecord(record); // team is empty (no pokemon)
    const pokemon: TeambuilderPokemonArray = this.mapToTeambuilderPokemon(record.pokemon)
                    .filter(p => !!p) || [];
    team.setPokemon(pokemon); // manually fill the pokemon
    if (pokemon.length > 0) {
      this.selectPokemon(pokemon[0]);
    }
    this.team.update(team);
  }

  clearTeam(): void {
    this.team.update(this.newTeam());
    this.selectPokemon(null);
  }

  getCurrentTeampokemon(): TeambuilderPokemon[] { return this.team.getValue().getPokemon(); }

  setCurrentTeampokemon(pokemon: TeambuilderPokemon[]) {
    const team = this.team.getValue();
    team.setPokemon(pokemon);
    if (pokemon.length > 0) {
      this.selectPokemon(pokemon[0]);
    }
    this.notifyTeamChangeListeners();
  }

  selectPokemon(pokemon: TeambuilderPokemon) {
    this.selectedPokemon.update(pokemon);
    if (pokemon) {
      this.tbView.displayItemList();
    }
  }

  updateSelectedPokemon(pokemon: TeambuilderPokemon) {
    this.selectedPokemon.update(pokemon);
  }

  getNextId(): number {
    return this.getCurrentTeampokemon().length;
  }

  addPokemon(fromInterface: IPokemon) {
    const team = this.getCurrentTeampokemon();
    if (team.length < 6) {
      const nextId = this.getNextId();
      const pokemon = new TeambuilderPokemon(fromInterface, nextId);
      team.push(pokemon);
      this.selectPokemon(pokemon);
    }
  }

  overwriteSelectedPokemon(fromInterface: IPokemon): void {
    const selectedPokemon = this.selectedPokemon.getValue();
    if (selectedPokemon !== null) {
      const teambuilderId = selectedPokemon.getTeambuilderId();
      if (typeof teambuilderId !== 'number') throw new Error('Pokémon has no valid Teambuilder-ID');
      const pokemon = new TeambuilderPokemon(fromInterface, teambuilderId);
      const team = this.team.getValue();
      if (team.replacePokemon(teambuilderId, pokemon)) {
        this.selectPokemon(pokemon);
      }
    }
  }

  addOrReplacePokemon(fromInterface: IPokemon): void {
    if (this.selectedPokemon.getValue() === null) {
      this.addPokemon(fromInterface);
    } else {
      this.overwriteSelectedPokemon(fromInterface);
    }
  }

  notifyTeamChangeListeners(): void {
    // as the same value as before is passed again, change detection will detect that and thus not rerender the whole view
    this.team.update(this.team.getValue());
  }

  deleteTeampokemon(id: number): void {
    this.setCurrentTeampokemon(
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
        this.selectPokemon(team[id]);
      } else if (count > 0) {
        this.selectPokemon(team[count - 1]);
      } else {
        this.selectPokemon(null);
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
      this.updateSelectedPokemon(currentTeampokemon);
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
    this.updateSelectedPokemon(currentTeampokemon);
  }

  // ITEM

  updateSelectedPokemonsItem(item: IItem) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (currentTeampokemon.item !== item) {
      currentTeampokemon.setItem(item);
      this.updateSelectedPokemon(currentTeampokemon);
      this.tbView.displayAbilitiesList();
    }
  }

  // ABILITY

  updateSelectedPokemonsAbility(ability: IAbility) {
    const currentTeampokemon = this.selectedPokemon.getValue();
    if (currentTeampokemon.ability !== ability) {
      currentTeampokemon.setAbility(ability);
      this.updateSelectedPokemon(currentTeampokemon);
      this.tbView.displayMoveList();
      this.selectNextEmptyMoveslot();
    }
  }

  createTeambuilderPokemonFromDBRecord(record: ITeambuilderPokemon, teambuilderId?: number): TeambuilderPokemon {
    const pokemonSchema = this.tbStore.getPokemonById(record.id);
    if (!pokemonSchema) return null;
    const tbPokemon = new TeambuilderPokemon(pokemonSchema, teambuilderId);
    tbPokemon.setNickname(record.nickname);
    tbPokemon.setLevel(record.level);
    tbPokemon.setHappiness(record.happiness);
    if (!tbPokemon.requiresGender()) { tbPokemon.setGender(record.gender); }
    tbPokemon.setShiny(record.shiny);
    tbPokemon.changeNatureById(record.nature);
    tbPokemon.setItem(this.tbStore.getItemById(record.item));
    tbPokemon.setAbility(this.tbStore.getAbilityById(record.ability));
    tbPokemon.setMoves(this.tbStore.getMovesByIds(record.moves));
    if (tbPokemon.moveSetFull()) { tbPokemon.markMovesFilled(); }
    tbPokemon.stats.setEvsAndDvs(record.evs, record.dvs);
    return tbPokemon;
  }

  mapToTeambuilderPokemon(pokemon: ITeambuilderPokemon[]): TeambuilderPokemonArray {
    return pokemon.map((p: ITeambuilderPokemon, index: number) => this.createTeambuilderPokemonFromDBRecord(p, index));
  }

  importTeamFromShowdown(showdownData: string): boolean {
    const pokemonData: ITeambuilderPokemon[] = this.tbStore.mapShowdownTeamToPokedraftTeamRecord(showdownData);
    const teambuilderPokemon: TeambuilderPokemonArray = this.mapToTeambuilderPokemon(pokemonData);
    this.setCurrentTeampokemon(teambuilderPokemon);
    return false;
  }

  importTeamFromJSON(data: string): boolean {
    try {
      const parsedTeampokemon: ITeambuilderPokemon[] = JSON.parse(data);
      this.setCurrentTeampokemon(this.mapToTeambuilderPokemon(parsedTeampokemon));
    } catch (e) {
      alert(this.tbLang.translateFromTranslatable({
        english: 'Syntax Error: Your provided JSON is not correct. Parsing failed.',
        german: 'Syntaxfehler: Das bereitgestellte JSON ist fehlerhaft. Das Parsen schlug fehl.'
      }));
      return false;
    }
    return true;
  }
}
