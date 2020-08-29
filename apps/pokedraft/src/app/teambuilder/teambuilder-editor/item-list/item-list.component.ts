import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {
  TeambuilderViewService,
  IItem,
  TeambuilderEventService,
  SubscriptionContainer,
  TeambuilderPokemonService,
  DividedTeambuilderEntityCollection,
  ITEM_DIVIDER_PROP,
  TeambuilderLanguageService, TeambuilderListMarkerForDividedEntityCollection, TeambuilderStoreService
} from "@pokedraft/teambuilder";
import {filter} from "rxjs/operators";

@Component({
  selector: 'pd-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements AfterViewInit {

  @ViewChild('itemListContainer') itemListContainerElement: ElementRef;

  items: DividedTeambuilderEntityCollection<IItem>;

  marker: TeambuilderListMarkerForDividedEntityCollection<IItem>;

  private subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService,
              private tbLanguage: TeambuilderLanguageService,
              private tbStore: TeambuilderStoreService) {
    this.items = new DividedTeambuilderEntityCollection<IItem>(this.tbStore.getItems(), ITEM_DIVIDER_PROP);
    this.marker = new TeambuilderListMarkerForDividedEntityCollection<IItem>(this.items);
    this.subscriptions = new SubscriptionContainer(
      this.tbLanguage.language.changes$
        .subscribe(_ => this.items.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name', false)),
      this.tbEvents.itemListEvents.search.changes$
        .subscribe(searchString => this.items.filterByString(searchString, 'name', this.tbLanguage.getCurrentLanguageAsProp())),
      this.tbEvents.itemListEvents.down.subscribe(_ => this.marker.inc()),
      this.tbEvents.itemListEvents.up.subscribe(_ => this.marker.dec()),
      this.tbEvents.itemListEvents.selectMarked
        .subscribe(_ => this.tbPokemon.updateSelectedPokemonsItem(this.marker.getMarkedEntity())),
    );
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.tbView.displayMode.changes$
        .pipe(filter(dm => dm && dm.showItemList === true))
        .subscribe(_ => this.scrollTop())
    );
  }

  selectItem(item: IItem) {
    this.tbPokemon.updateSelectedPokemonsItem(item);
  }

  sortItemsByName(): void {
    this.items.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name');
  }

  scrollTop() {
    this.itemListContainerElement.nativeElement.scrollTop = 0;
  }
}
