import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IAbility,
  SubscriptionContainer,
  TeambuilderPokemonService,
  testAbilities
} from "@pokedraft/teambuilder";

@Component({
  selector: 'abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss']
})
export class AbilitiesListComponent implements OnInit, OnDestroy {

  abilities: IAbility[] = testAbilities;

  selectedTeampokemonsAbility: IAbility;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.selectedTeampokemonsAbility = null;
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbPokemon.selectedTeampokemon.changes$
        .subscribe(pokemon => {
          this.selectedTeampokemonsAbility = pokemon ? pokemon.ability : null;
        })
    );
  }

  ngOnInit() {
    this.selectAbility(this.abilities[1]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  selectAbility(ability: IAbility) {
    this.tbPokemon.updateSelectedPokemonsAbility(ability);
  }

}
