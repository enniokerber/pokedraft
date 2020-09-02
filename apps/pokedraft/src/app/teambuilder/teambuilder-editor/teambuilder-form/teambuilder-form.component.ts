import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  SubscriptionContainer, TeambuilderLanguageService,
  TeambuilderPokemon, TeambuilderPokemonService, TeambuilderViewService,
} from "@pokedraft/teambuilder";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'pd-teambuilder-form',
  templateUrl: './teambuilder-form.component.html',
  styleUrls: ['./teambuilder-form.component.scss']
})
export class TeambuilderFormComponent implements OnInit, OnDestroy {

  pokemon: TeambuilderPokemon;

  searchPokemon = '';
  currentPokemonString = '';

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService) {
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedPokemon.changes$
        .pipe(
          filter(pokemon => pokemon !== null),
          tap(selectedPokemon => this.pokemon = selectedPokemon),
          map(pokemon => pokemon.getName()),
          switchMap(name => {
            if (name) {
              return this.tbLanguage.createTranslatorStream(name);
            } else {
              return of('');
            }
          })
        ).subscribe(nameString => {
        this.searchPokemon = nameString;
        this.currentPokemonString = nameString;
      }),
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }

  resetName() {
    this.searchPokemon = this.currentPokemonString;
  }

  openPokemonList() {
    this.tbView.displayPokemonList();
  }

  openStats() {
    this.tbView.displayStats();
  }
}
