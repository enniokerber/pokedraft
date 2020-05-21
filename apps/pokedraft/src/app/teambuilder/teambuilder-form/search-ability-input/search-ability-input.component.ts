import {Component, OnDestroy} from '@angular/core';
import {
  IAbility,
  SubscriptionContainer,
  TeambuilderEventService, TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderViewService
} from "@pokedraft/teambuilder";
import {of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'pd-search-ability-input',
  templateUrl: './search-ability-input.component.html',
  styleUrls: ['./search-ability-input.component.scss']
})
export class SearchAbilityInputComponent implements OnDestroy {

  searchAbility = '';

  currentAbility: IAbility;

  subscriptions: SubscriptionContainer;

  constructor(private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService,
              private tbEvents: TeambuilderEventService,
              private tbPokemon: TeambuilderPokemonService) {
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbPokemon.selectedTeampokemon.changes$
        .pipe(
          map(pokemon => pokemon.getAbility()),
          tap(ability => this.currentAbility = ability),
          switchMap(ability => {
            if (ability) {
              return this.tbLanguage.createTranslatorStream({
                english: ability.name,
                german: ability.german
              });
            } else {
              return of('');
            }
          })
        ).subscribe(abilityString => {
        this.searchAbility = abilityString;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  reset() {
    if (this.currentAbility) {
      this.searchAbility = this.tbLanguage.translateFromTranslatable({
        english: this.currentAbility.name,
        german: this.currentAbility.german
      });
    }
  }

  searchForAbility(searchString: string) {
    this.tbEvents.searchAbility.update(searchString);
  }

  openAbilitiesList() {
    this.tbView.displayAbilitiesList();
  }

}
