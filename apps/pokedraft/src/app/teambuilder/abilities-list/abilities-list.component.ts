import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IAbility,
  SubscriptionContainer,
  TeambuilderEntityCollection,
  TeambuilderEventService,
  TeambuilderLanguageService,
  TeambuilderListMarker,
  TeambuilderPokemonService,
  testAbilities
} from "@pokedraft/teambuilder";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss']
})
export class AbilitiesListComponent implements OnInit, OnDestroy {

  abilities: TeambuilderEntityCollection<IAbility>;

  marker: TeambuilderListMarker<IAbility>;

  selectedTeampokemonsAbility: IAbility;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbEvents: TeambuilderEventService,
              private tbLanguage: TeambuilderLanguageService) {
    this.abilities = new TeambuilderEntityCollection<IAbility>([]);
    this.marker = new TeambuilderListMarker<IAbility>(this.abilities);
    this.selectedTeampokemonsAbility = null;
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedTeampokemon.changes$
        .subscribe(pokemon => {
          let abilities = [];
          if (pokemon !== null) {
            this.selectedTeampokemonsAbility = pokemon.ability;
            abilities = testAbilities.filter(ability => pokemon.getPossibleAbilities().includes(ability.name));
          } else {
            this.selectedTeampokemonsAbility = null;
          }
          this.abilities.setEntities(abilities);
        }),
      this.tbEvents.abilityListEvents.search.changesNotEmpty$
        .pipe(debounceTime(250))
        .subscribe(searchString => this.abilities.filterByString(searchString, this.tbLanguage.getCurrentLanguageAsProp())),
      this.tbEvents.abilityListEvents.search.reset$
        .subscribe(_ => this.abilities.filterByString('', this.tbLanguage.getCurrentLanguageAsProp())),
      this.tbEvents.abilityListEvents.up.subscribe(_ => this.marker.dec()),
      this.tbEvents.abilityListEvents.down.subscribe(_ => this.marker.inc()),
      this.tbEvents.abilityListEvents.selectMarked.subscribe(
        _ => this.tbPokemon.updateSelectedPokemonsAbility(this.marker.getMarkedEntity())
      )
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  selectAbility(ability: IAbility) {
    this.tbPokemon.updateSelectedPokemonsAbility(ability);
  }

}
