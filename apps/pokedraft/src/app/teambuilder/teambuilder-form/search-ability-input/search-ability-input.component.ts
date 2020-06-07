import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {
  IAbility,
  SubscriptionContainer,
  TeambuilderEventService, TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderViewService
} from "@pokedraft/teambuilder";
import {of} from "rxjs";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {PdInputComponent} from "@pokedraft/material";

@Component({
  selector: 'pd-search-ability-input',
  templateUrl: './search-ability-input.component.html',
  styleUrls: ['./search-ability-input.component.scss']
})
export class SearchAbilityInputComponent implements AfterViewInit, OnDestroy {

  @ViewChild('abilityInput') elem: PdInputComponent;

  searchAbility = '';

  currentAbility: IAbility;

  subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService) {
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedTeampokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          map(pokemon => pokemon.getAbility()),
          tap(ability => this.currentAbility = ability),
          switchMap(ability => {
            if (ability) {
              return this.tbLanguage.createTranslatorStream(ability.name);
            } else {
              return of('');
            }
          })
        ).subscribe(abilityString => {
        this.searchAbility = abilityString;
      }),
    );
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.tbView.displayMode.changes$
        .pipe(filter(dm => !!dm.showAbilitiesList))
        .subscribe(_ => this.elem.focus()),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  resetSearchInput() {
    if (this.currentAbility) {
      this.searchAbility = this.tbLanguage.translateFromTranslatable(this.currentAbility.name);
    }
  }

  deselectAbilityIfSearchIsEmpty() {
    if (this.currentAbility) {
      this.tbPokemon.updateSelectedPokemonsAbility(null);
    }
  }

  searchForAbility(searchString: string) {
    this.tbEvents.abilityListEvents.search.update(searchString);
    if (searchString === '') {
      this.deselectAbilityIfSearchIsEmpty();
    }
  }

  openAbilitiesList() {
    this.tbView.displayAbilitiesList();
  }

  listUp() {
    this.tbEvents.abilityListEvents.up.next();
  }

  listDown() {
    this.tbEvents.abilityListEvents.down.next();
  }

  selectMarkedAbility() {
    this.tbEvents.abilityListEvents.selectMarked.next();
  }

}
