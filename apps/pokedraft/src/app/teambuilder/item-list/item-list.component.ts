import { Component, OnInit } from '@angular/core';
import {
  TeambuilderViewService,
  testItems,
  IItem,
  TeambuilderEventService,
  SubscriptionContainer,
  TeambuilderPokemonService,
  DividedTeambuilderEntityCollection,
  ITEM_DIVIDER_PROP,
  TeambuilderLanguageService, TeambuilderListMarkerForDividedEntityCollection
} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: DividedTeambuilderEntityCollection<IItem>;

  marker: TeambuilderListMarkerForDividedEntityCollection<IItem>;

  private subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService,
              private tbLanguage: TeambuilderLanguageService) {
    this.items = new DividedTeambuilderEntityCollection<IItem>(testItems, ITEM_DIVIDER_PROP);
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
}
