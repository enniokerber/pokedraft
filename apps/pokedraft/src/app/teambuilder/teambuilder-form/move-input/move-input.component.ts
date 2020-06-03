import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {
  IMove,
  TeambuilderPokemonService,
  Language,
  Languages,
  TeambuilderViewService,
  TeambuilderEventService,
  SubscriptionContainer, TeambuilderLanguageService,
} from "@pokedraft/teambuilder";
import {filter} from "rxjs/operators";

@Component({
  selector: 'move-input',
  templateUrl: './move-input.component.html',
  styleUrls: ['./move-input.component.scss']
})
export class MoveInputComponent implements AfterViewInit, OnDestroy {

  @ViewChild('moveInput') elem: ElementRef;

  @Input() set move(move: IMove) {
    this._move = move;
    this.updateSearchName();
    if (move !== null) {
      this._type = this._move.type.toLowerCase();
    } else {
      this._type = '';
    }
  }

  @Input() moveId: number;

  _move: IMove;

  _type: string;

  _searchName: string;

  _language: Language = Languages.ENGLISH;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbEvents: TeambuilderEventService,
              private tbLanguage: TeambuilderLanguageService,
              private tbView: TeambuilderViewService) {
    this._move = null;
    this.moveId = -1;
    this._type = '';
    this._searchName = '';
    this.subscriptions = new SubscriptionContainer(
      this.tbLanguage.language.changes$
        .subscribe(language => {
          this._language = language;
          this.updateSearchName();
        }),
    );
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.tbPokemon.nextMoveslot.changes$
        .pipe(filter(moveslot => this.moveId === moveslot))
        .subscribe(_ => this.elem.nativeElement.focus())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  updateSearchName() {
    this._searchName = this.tbLanguage.translateFromTranslatable(this._move?.name);
  }

  searchMove() {
    if (this._searchName === '') {
      this.deselectMove();
    }
    this.tbEvents.moveListEvents.search.update(this._searchName);
  }

  deselectMove() {
    this.tbPokemon.deselectFocusedMove();
  }

  openMoveList() {
    this.tbView.displayMoveList();
  }

  selectMoveSlot() {
    if (this.tbPokemon.nextMoveslot.getValue() !== this.moveId) {
      this.tbPokemon.setNextMoveslot(this.moveId);
    }
  }

  listUp() {
    this.tbEvents.moveListEvents.up.next();
  }

  listDown() {
    this.tbEvents.moveListEvents.down.next();
  }

  selectMarkedMove() {
    this.tbEvents.moveListEvents.selectMarked.next();
  }
}
