import {Component, OnDestroy} from '@angular/core';
import {
  SubscriptionContainer,
  TeambuilderEventService, TeambuilderPokemonService,
  TeambuilderViewService, TeambuilderLanguageService, IItem,
} from "@pokedraft/teambuilder";
import {of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'pd-search-item-input',
  templateUrl: './search-item-input.component.html',
  styleUrls: ['./search-item-input.component.scss']
})
export class SearchItemInputComponent implements OnDestroy {

  searchItem = '';

  currentItem: IItem;

  subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService) {
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbPokemon.selectedTeampokemon.changes$
        .pipe(
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  reset() {
    if (this.currentItem) {
      this.searchItem = this.tbLanguage.translateFromTranslatable(this.currentItem.name);
    }
  }

  searchForItem(searchString: string) {
    this.tbEvents.searchItem.update(searchString);
  }

  openItemList() {
    this.tbView.displayItemList();
  }
}
