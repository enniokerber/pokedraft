import {Injectable} from '@angular/core';

import {
  IAbility,
  IMove,
  IPokemon,
  BehaviorSubjectStream,
  TeambuilderPokemon, IItem
} from "../../models";
import {TeambuilderEventService} from "../event/teambuilder-event.service";


@Injectable()
export class TeambuilderPokemonService {

  private _teampokemon: TeambuilderPokemon[];
  private readonly _selectedTeampokemon: BehaviorSubjectStream<TeambuilderPokemon>;
  private _selectedMoveSlot;
  private readonly _selectMoveSlotChanges: BehaviorSubjectStream<number>;

  constructor(private tbEvents: TeambuilderEventService) {
    this._teampokemon = [];
    this._selectedTeampokemon = new BehaviorSubjectStream<TeambuilderPokemon>(null);
    this._selectedMoveSlot = 0;
    this._selectMoveSlotChanges = new BehaviorSubjectStream<number>(this._selectedMoveSlot);
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

  get selectedMoveSlot() {
    return this._selectedMoveSlot;
  }

  set selectedMoveSlot(value) {
    this._selectedMoveSlot = value;
  }

  get selectMoveSlotChanges(): BehaviorSubjectStream<number> {
    return this._selectMoveSlotChanges;
  }

  selectTeampokemon(value: TeambuilderPokemon) {
    this.selectedTeampokemon.update(value);
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

  setCurrentMoveslotData(move: IMove): void {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.moves[this.selectedMoveSlot].setData(move);
    this.selectTeampokemon(currentTeampokemon);
  }

  insertMove(move: IMove) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    if (this.selectedMoveSlot < 4) {
      if (!currentTeampokemon.moves.map(container => container.data).includes(move)) {
        this.setCurrentMoveslotData(move);
        if (this.selectedMoveSlot === 3) {
          this.selectedMoveSlot = -1;
        }
        this.selectMoveSlotChanges.update(++this.selectedMoveSlot);
        this.resetSearchMove();
      } else {
        console.log('This move is already on the set');
      }
    }
  }

  resetSearchMove() {
    this.tbEvents.searchMove.reset();
  }

  deselectFocusedMove() {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.moves[this.selectedMoveSlot].setData(null);
    this.selectTeampokemon(currentTeampokemon);
  }

  updateSelectedPokemonsMoves(moves: IMove[]) {
    const selectedPokemon = this.selectedTeampokemon.getValue();
    if (selectedPokemon !== null) {
      selectedPokemon.possibleMoves = moves;
      this.selectTeampokemon(selectedPokemon);
    }
  }

  updateSelectedMoveSlot(id: number) {
    this.selectedMoveSlot = id;
    this.selectMoveSlotChanges.update(id);
    this.resetSearchMove();
  }

  // ABILITY

  updateSelectedPokemonsAbility(ability: IAbility) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.ability = ability;
    this.selectTeampokemon(currentTeampokemon);
  }

  // ITEM

  updateSelectedPokemonsItem(item: IItem) {
    const currentTeampokemon = this.selectedTeampokemon.getValue();
    currentTeampokemon.item = item;
    this.selectTeampokemon(currentTeampokemon);
  }

}
