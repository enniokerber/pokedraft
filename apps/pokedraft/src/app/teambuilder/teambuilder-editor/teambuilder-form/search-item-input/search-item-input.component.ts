import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {
  SubscriptionContainer,
  TeambuilderEventService, TeambuilderPokemonService,
  TeambuilderViewService, TeambuilderLanguageService, IItem,
} from "@pokedraft/teambuilder";
import {of} from "rxjs";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {PdInputComponent} from "@pokedraft/material";

@Component({
  selector: 'pd-search-item-input',
  templateUrl: './search-item-input.component.html',
  styleUrls: ['./search-item-input.component.scss']
})
export class SearchItemInputComponent implements AfterViewInit, OnDestroy {

  @ViewChild('itemInput') elem: PdInputComponent;

  searchItem = '';

  currentItem: IItem;

  subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService) {
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedPokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          map(pokemon => pokemon.getItem()),
          tap(item => this.currentItem = item),
          switchMap(item => {
            if (item) {
              return this.tbLanguage.createTranslatorStream(item.name);
            } else {
              return of('');
            }
          })
        ).subscribe(itemString => {
        this.searchItem = itemString;
      })
    );
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.tbView.displayMode.changes$
        .pipe(filter(dm => !!dm.showItemList))
        .subscribe(_ => this.elem.focus()),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  resetSearchInput() {
    if (this.currentItem) {
      this.searchItem = this.tbLanguage.translateFromTranslatable(this.currentItem.name);
    }
  }

  deselectItemIfSearchIsEmpty() {
    if (this.currentItem) {
      this.tbPokemon.updateSelectedPokemonsItem(null);
    }
  }

  searchForItem(searchString: string) {
    this.tbEvents.itemListEvents.search.update(searchString);
    if (searchString === '') {
      this.deselectItemIfSearchIsEmpty();
    }
  }

  openItemList() {
    this.tbView.displayItemList();
  }


  listUp() {
    this.tbEvents.itemListEvents.up.next();
  }

  listDown() {
    this.tbEvents.itemListEvents.down.next();
  }

  selectMarkedItem() {
    this.tbEvents.itemListEvents.selectMarked.next();
  }
}
