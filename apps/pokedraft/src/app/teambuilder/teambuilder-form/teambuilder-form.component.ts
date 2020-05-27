import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  gendersWithLabels,
  IGender, SubscriptionContainer, TeambuilderLanguageService,
  TeambuilderPokemon, TeambuilderPokemonService, TeambuilderViewService,
} from "@pokedraft/teambuilder";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'teambuilder-form',
  templateUrl: './teambuilder-form.component.html',
  styleUrls: ['./teambuilder-form.component.scss']
})
export class TeambuilderFormComponent implements OnInit, OnDestroy {

  pokemon: TeambuilderPokemon;

  searchPokemon = '';
  currentPokemonString = '';

  genders: IGender[] = gendersWithLabels;

  currentMoveslot = 0;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbViewService: TeambuilderViewService,
              private tbLanguage: TeambuilderLanguageService) {
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.selectedTeampokemon.changes$
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
      this.tbPokemon.nextMoveslot.changes$.pipe(
        filter(id => (id !== -1 && id < 4))
      ).subscribe(moveslot => {
        this.currentMoveslot = moveslot;
      })
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
    this.tbViewService.displayPokemonList();
  }
}
