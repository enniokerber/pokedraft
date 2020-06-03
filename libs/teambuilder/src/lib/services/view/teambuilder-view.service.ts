import {Injectable} from '@angular/core';
import {
  DisplayModeBuilder,
  BehaviorSubjectStream,
  TeambuilderDisplayMode
} from "../../models";

@Injectable()
export class TeambuilderViewService {

  private readonly _displayMode: BehaviorSubjectStream<TeambuilderDisplayMode>;
  private readonly _showTiers: BehaviorSubjectStream<boolean>;

  constructor() {
    this._displayMode = new BehaviorSubjectStream<TeambuilderDisplayMode>(new DisplayModeBuilder().displayPokemonList().get());
    this._showTiers = new BehaviorSubjectStream<boolean>(true)
  }

  get displayMode(): BehaviorSubjectStream<TeambuilderDisplayMode> {
    return this._displayMode;
  }

  changeDisplayMode(config: TeambuilderDisplayMode) {
    this._displayMode.update(config);
  }

  get showTiers(): BehaviorSubjectStream<boolean> {
    return this._showTiers;
  }

  displayMoveList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayMoveList()
        .get()
    )
  }

  displayRawPokemonList() {
    this.changeDisplayMode(new DisplayModeBuilder().displayPokemonList().get())
  }

  displayPokemonList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayPokemonList()
        .get()
    )
  }

  displayItemList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayItemList()
        .get()
    )
  }

  displayAbilitiesList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayAbilitiesList()
        .get()
    )
  }

  displayStats() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayStats()
        .get()
    )
  }
}
