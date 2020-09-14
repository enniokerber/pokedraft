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
    this._displayMode = new BehaviorSubjectStream<TeambuilderDisplayMode>(new DisplayModeBuilder().displayPokemonList().build());
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
        .build()
    )
  }

  displayRawPokemonList() {
    this.changeDisplayMode(new DisplayModeBuilder().displayPokemonList().build())
  }

  displayPokemonList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayPokemonList()
        .build()
    )
  }

  displayItemList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayItemList()
        .build()
    )
  }

  displayAbilitiesList() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayAbilitiesList()
        .build()
    )
  }

  displayStats() {
    this.changeDisplayMode(
      DisplayModeBuilder.buildFormView()
        .displayStats()
        .build()
    )
  }

  displayStatistics() {
    this.changeDisplayMode(
      DisplayModeBuilder
        .fromExistingDisplayMode(this.displayMode.getValue())
        .displayStatistics()
        .build()
    );
  }

  displayImport() {
    this.changeDisplayMode(
      DisplayModeBuilder
        .fromExistingDisplayMode(this.displayMode.getValue())
        .displayImport()
        .build()
    );
  }
}
