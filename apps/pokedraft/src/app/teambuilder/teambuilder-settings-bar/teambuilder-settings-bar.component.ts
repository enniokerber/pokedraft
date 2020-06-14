import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  Language,
  LanguageWithLabel,
  Languages,
  LanguagesWithLabels,
  SubscriptionContainer,
  TeambuilderLanguageService
} from "@pokedraft/teambuilder";

@Component({
  selector: 'teambuilder-settings-bar',
  templateUrl: './teambuilder-settings-bar.component.html',
  styleUrls: ['./teambuilder-settings-bar.component.scss']
})
export class TeambuilderSettingsBarComponent implements OnInit, OnDestroy {

  languages: LanguageWithLabel[];

  language: Language = Languages.ENGLISH;
  subscriptions: SubscriptionContainer = new SubscriptionContainer();

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this.languages = LanguagesWithLabels;
    this.subscriptions.add(
      this.tbLanguage.language.changes$.subscribe((language) => this.language = language)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  updateLanguage() {
    this.tbLanguage.changeLanguage(this.language);
  }
}
