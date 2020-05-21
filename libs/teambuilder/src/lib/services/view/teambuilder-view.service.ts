import {Injectable, OnDestroy} from '@angular/core';
import {
  DisplayModeBuilder,
  BehaviorSubjectStream, SubscriptionContainer,
  TeambuilderDisplayMode
} from "../../models";
import {TeambuilderPokemonService} from "../pokemon/teambuilder-pokemon.service";
import {distinctUntilChanged} from "rxjs/operators";


@Injectable()
export class TeambuilderViewService implements OnDestroy {

  private readonly _displayMode: BehaviorSubjectStream<TeambuilderDisplayMode>;
  private readonly _showTiers: BehaviorSubjectStream<boolean>;

  private readonly subscriptions: SubscriptionContainer;

  constructor(private tbStore: TeambuilderPokemonService) {
    this._displayMode = new BehaviorSubjectStream<TeambuilderDisplayMode>(new DisplayModeBuilder().displayPokemonList().get());
    this._showTiers = new BehaviorSubjectStream<boolean>(true)
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbStore.selectedTeampokemon.changes$
        .pipe(distinctUntilChanged())
        .subscribe(pokemon => {
          if (pokemon) {
            this.displayMoveList();
          } else {
            this.displayRawPokemonList();
          }
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
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
}
