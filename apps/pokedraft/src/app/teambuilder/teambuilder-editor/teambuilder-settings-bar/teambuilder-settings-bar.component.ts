import {Component, OnDestroy} from '@angular/core';
import {
  Language,
  LanguageWithLabel,
  Languages,
  LanguagesWithLabels,
  SubscriptionContainer,
  TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderApiService, TeambuilderTeam
} from '@pokedraft/teambuilder';
import { IPokedraftUser, LoadingState, PokedraftAuthService } from '@pokedraft/core';
import { PopUpAnimation } from '@pokedraft/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'pd-teambuilder-settings-bar',
  templateUrl: './teambuilder-settings-bar.component.html',
  styleUrls: ['./teambuilder-settings-bar.component.scss'],
  animations: [ PopUpAnimation ]
})
export class TeambuilderSettingsBarComponent implements OnDestroy {

  languages: LanguageWithLabel[];

  language: Language = Languages.ENGLISH;

  team$: Observable<TeambuilderTeam>;

  user$: Observable<IPokedraftUser>;

  saveRequestState: LoadingState;

  subscriptions: SubscriptionContainer = new SubscriptionContainer();

  constructor(private tbLanguage: TeambuilderLanguageService,
              private tbPokemon: TeambuilderPokemonService,
              private tbApi: TeambuilderApiService,
              private auth: PokedraftAuthService) {
    this.languages = LanguagesWithLabels;
    this.subscriptions.add(
      this.tbLanguage.language.changes$.subscribe(language => this.language = language)
    );
    this.team$ = this.tbPokemon.team.changes$;
    this.user$ = this.auth.user$;
    this.saveRequestState = this.tbApi.saveRequestState;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  updateLanguage() {
    this.tbLanguage.changeLanguage(this.language);
  }

  save(): void {
    this.tbApi.saveTeam();
  }
}
