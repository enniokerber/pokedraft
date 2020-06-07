import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'pd-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

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
    this.items.sort(this.tbLanguage.getCurrentLanguageAsProp(), 'name');
    this.marker = new TeambuilderListMarkerForDividedEntityCollection<IItem>(this.items);
    this.subscriptions = new SubscriptionContainer(
      this.tbEvents.itemListEvents.search.changes$
        .subscribe(searchString => this.items.filterByString(searchString, 'name', this.tbLanguage.getCurrentLanguageAsProp())),
      this.tbEvents.itemListEvents.down.subscribe(_ => this.marker.inc()),
      this.tbEvents.itemListEvents.up.subscribe(_ => this.marker.dec()),
      this.tbEvents.itemListEvents.selectMarked
        .subscribe(_ => this.tbPokemon.updateSelectedPokemonsItem(this.marker.getMarkedEntity())),
    );
  }

  ngOnInit(): void {
    this.tbView.displayItemList();
  }

  selectItem(item: IItem) {
    this.tbPokemon.updateSelectedPokemonsItem(item);
  }

  scrollTop() {
    if (this.itemListContainerElement) {
      this.itemListContainerElement.nativeElement.scrollTop = 0;
    }
  }
}
