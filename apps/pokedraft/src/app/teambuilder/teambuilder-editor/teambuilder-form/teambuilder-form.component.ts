import {Component, OnDestroy} from '@angular/core';
import {
  SubscriptionContainer, TeambuilderEventService, TeambuilderLanguageService,
  TeambuilderPokemon, TeambuilderPokemonService, TeambuilderViewService
} from '@pokedraft/teambuilder';
import {filter, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'pd-teambuilder-form',
  templateUrl: './teambuilder-form.component.html',
  styleUrls: ['./teambuilder-form.component.scss']
})
export class TeambuilderFormComponent implements OnDestroy {

  loadingSprite: boolean;

  pokemon: TeambuilderPokemon;

  searchPokemon = '';
  currentPokemonString = '';

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService,
              private tbEvents: TeambuilderEventService) {
    this.searchPokemon = this.currentPokemonString = '';
    this.loadingSprite = false;
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedPokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          tap(selectedPokemon => {
            if (this.pokemon !== selectedPokemon) {
              this.loadingSprite = true;
            }
            this.pokemon = selectedPokemon;
          }),
          map(pokemon => pokemon.getName()),
          switchMap(name => {
            if (name) {
              return this.tbLanguage.createTranslatorStream(name);
            } else {
              return of('');
            }
          })
        ).subscribe(nameString => {
        this.searchPokemon = this.currentPokemonString = nameString;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }

  setLevel(to: string): void {
    const asNumber = Number(to);
    if (typeof asNumber === 'number' && !Number.isNaN(asNumber) && asNumber > 0 && asNumber <= 100) {
      this.pokemon.setLevel(asNumber);
    }
  }

  resetName() {
    this.searchPokemon = this.currentPokemonString;
  }

  searchPokemonByName(pokemon: string): void {
    this.tbEvents.pokemonListEvents.search.update(pokemon);
  }

  openPokemonList() {
    this.tbView.displayPokemonList();
  }

  openStats() {
    this.tbView.displayStats();
  }
}
