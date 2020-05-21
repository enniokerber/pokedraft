import { Component, OnInit } from '@angular/core';
import {
  TeambuilderViewService,
  testItems,
  IItem,
  TeambuilderEventService,
  SubscriptionContainer, TeambuilderPokemonService
} from "@pokedraft/teambuilder";

@Component({
  selector: 'pd-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: IItem[] = testItems;

  selectedTeampokemonsItem: IItem;

  private subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService) {
    this.selectedTeampokemonsItem = null;
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbPokemon.selectedTeampokemon.changes$
        .subscribe(pokemon => {
          this.selectedTeampokemonsItem = pokemon ? pokemon.item : null;
        }),
      this.tbEvents.searchItem.changes$.subscribe(searchString => {}),
    );
  }

  ngOnInit(): void {
    this.tbView.displayItemList();
  }

  selectItem(item: IItem) {
    this.tbPokemon.updateSelectedPokemonsItem(item);
  }

}
