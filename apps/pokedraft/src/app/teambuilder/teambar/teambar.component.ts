import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  Language,
  Languages,
  SubscriptionContainer, TeambuilderLanguageService,
  TeambuilderPokemon,
  TeambuilderPokemonService, TeambuilderViewService
} from "@pokedraft/teambuilder";

@Component({
  selector: 'teambar',
  templateUrl: './teambar.component.html',
  styleUrls: ['./teambar.component.scss']
})
export class TeambarComponent implements OnInit, OnDestroy {

  team: TeambuilderPokemon[];

  selectedTeamPokemon: TeambuilderPokemon;

  language: Language = Languages.ENGLISH;

  subscriptions: SubscriptionContainer;

  constructor(private tbStore: TeambuilderPokemonService,
              private tbLanguage: TeambuilderLanguageService) {
    this.team = tbStore.teampokemon;
    this.selectedTeamPokemon = null;
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbStore.selectedTeampokemon.changes$.subscribe(
        pokemon => this.selectedTeamPokemon = pokemon),
      this.tbLanguage.language.changes$.subscribe(language => this.language = language)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  selectPokemon(pokemon: TeambuilderPokemon): void {
    if (this.selectedTeamPokemon === null || pokemon.teambuilderPokemonId !== this.selectedTeamPokemon.teambuilderPokemonId) {
      this.tbStore.selectTeampokemon(pokemon);
    }
  }

  createPokemon(): void {
    if (this.tbStore.selectedTeampokemon.getValue() !== null) {
      this.tbStore.selectTeampokemon(null);
    }
  }

  deletePokemon(id: number): void {
    this.team = this.tbStore.deleteTeampokemon(id);
  }

}
