import {Component, Input, OnDestroy} from '@angular/core';
import {Language, Languages} from "../../models";
import {Observable, Subscription} from "rxjs";
import {TeambuilderLanguageService} from "../../services";

/*
This component translates the displayed text by subscribing to the language changes stream in the TeambuilderViewService
 */

@Component({
  selector: 'translator2',
  templateUrl: './translator2.component.html'
})
export class Translator2Component implements OnDestroy {

  content$: Observable<string>;

  _language: Language = Languages.ENGLISH;

  _english = '';

  _german;

  private _subscription: Subscription;

  @Input() set english(content: string) {
    this._english = content;
    if (this.languageIsEnglish()) {
      this.setContent(content);
    }
  }

  @Input() set german(content: string) {
    this._german = content;
    if (this.languageIsGerman()) {
      this.setContent(content);
    }
  }

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this._subscription = this.tbLanguage.language.changes$
      .subscribe(language => this._language = language);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private setContent(content?: string) {
    if (content) {
      this.content$ = this.tbLanguage.createTranslatorStream({
        english: this._english,
        german: this._german,
      });
    }
  }

  private languageIsEnglish(): boolean { return this._language === Languages.ENGLISH; }

  private languageIsGerman(): boolean  { return this._language === Languages.GERMAN; }
}
