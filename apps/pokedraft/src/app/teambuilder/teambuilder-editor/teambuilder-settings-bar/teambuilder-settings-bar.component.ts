import {Component, OnDestroy} from '@angular/core';
import {
  Language,
  LanguageWithLabel,
  Languages,
  LanguagesWithLabels,
  SubscriptionContainer,
  TeambuilderLanguageService, TeambuilderPokemonService, TeambuilderApiService
} from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-teambuilder-settings-bar',
  templateUrl: './teambuilder-settings-bar.component.html',
  styleUrls: ['./teambuilder-settings-bar.component.scss']
})
export class TeambuilderSettingsBarComponent implements OnDestroy {

  languages: LanguageWithLabel[];

  language: Language = Languages.ENGLISH;
  subscriptions: SubscriptionContainer = new SubscriptionContainer();

  constructor(private tbLanguage: TeambuilderLanguageService,
              private tbPokemon: TeambuilderPokemonService,
              private tbApi: TeambuilderApiService) {
    this.languages = LanguagesWithLabels;
    this.subscriptions.add(
      this.tbLanguage.language.changes$.subscribe((language) => this.language = language)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  updateLanguage() {
    this.tbLanguage.changeLanguage(this.language);
  }

  logTeam() {
    console.log(this.tbPokemon.getTeamAsDatabaseRecord());
  }

  updateTeam(): void {
    this.tbApi.updateCurrentTeam().then();
  }
}
