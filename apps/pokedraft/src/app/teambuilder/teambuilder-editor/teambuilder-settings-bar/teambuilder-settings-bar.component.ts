import {Component, OnDestroy} from '@angular/core';
import {
  Language,
  LanguageWithLabel,
  Languages,
  LanguagesWithLabels,
  SubscriptionContainer,
  TeambuilderLanguageService,
  TeambuilderPokemonService,
  TeambuilderApiService, TeambuilderTeam, TeambuilderViewService, ITier, testTiers
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

  tiers: ITier[];

  team: TeambuilderTeam;

  user$: Observable<IPokedraftUser>;

  saveRequestState: LoadingState;

  subscriptions: SubscriptionContainer;

  constructor(private tbLanguage: TeambuilderLanguageService,
              private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService,
              private tbApi: TeambuilderApiService,
              private auth: PokedraftAuthService) {
    this.languages = LanguagesWithLabels;
    this.tiers = testTiers;
    this.team = null;
    this.subscriptions = new SubscriptionContainer(
      this.tbLanguage.language.changes$.subscribe(language => this.language = language),
      this.tbPokemon.team.changes$.subscribe(team => this.team = team)
    );
    this.user$ = this.auth.user$;
    this.saveRequestState = this.tbApi.saveRequestState;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  updateLanguage(): void {
    this.tbLanguage.changeLanguage(this.language);
  }

  save(): void {
    this.tbApi.saveTeam();
  }

  openImport(): void {
    this.tbView.displayImport();
  }
}
