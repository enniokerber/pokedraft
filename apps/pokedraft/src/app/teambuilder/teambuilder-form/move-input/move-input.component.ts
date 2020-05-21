import {Component, Input, OnDestroy} from '@angular/core';
import {
  IMove,
  TeambuilderPokemonService,
  Language,
  Languages,
  ITranslatable,
  emptyTranslatable,
  TeambuilderViewService,
  TeambuilderEventService,
  SubscriptionContainer, TeambuilderLanguageService,
} from "@pokedraft/teambuilder";

@Component({
  selector: 'move-input',
  templateUrl: './move-input.component.html',
  styleUrls: ['./move-input.component.scss']
})
export class MoveInputComponent implements OnDestroy {

  _move: IMove;

  _description: ITranslatable;

  _type: string;

  _searchName: string;

  _language: Language = Languages.ENGLISH;

  @Input() set move(move: IMove) {
    this._move = move;
    if (this._move !== null) {
      this.setInputValue();
      this.updateDescription();
      this._type = this._move.type.toLowerCase();
    } else {
      this._type = '';
    }
  }

  @Input() moveId: number;

  subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbEvents: TeambuilderEventService,
              private tbLanguage: TeambuilderLanguageService,
              private tbView: TeambuilderViewService) {
    this._move = null;
    this._description = emptyTranslatable();
    this._type = '';
    this._searchName = '';
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbLanguage.language.changes$
        .subscribe(language => {
          this._language = language;
          this.setInputValue();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  private setInputValue() {
    if (this._move !== null) {
      switch (this._language) {
        case Languages.GERMAN:
          this._searchName = this._move.german ? this._move.german : this._move.name;
          break;
        default:
          this._searchName = this._move.name;
      }
    }
  }

  private updateDescription() {
    if (this._move !== null) {
      this._description.english = this._move.description ? this._move.description : this._move.shortDescription;
      this._description.german = this._move.descriptionGerman ? this._move.descriptionGerman : this._move.descriptionGerman;
    }
  }

  searchMove() {
    if (this._searchName === '') {
      this.deselectMove();
    }
    this.tbEvents.searchMove.update(this._searchName);
  }

  deselectMove() {
    this.tbPokemon.deselectFocusedMove();
  }

  openMoveList() {
    this.tbView.displayMoveList();
  }

  selectMoveSlot() {
    this.tbPokemon.updateSelectedMoveSlot(this.moveId);
    this.openMoveList();
  }
}
