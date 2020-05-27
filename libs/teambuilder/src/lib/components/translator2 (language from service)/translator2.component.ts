import {Component, Input, OnDestroy} from '@angular/core';
import {createTranslatable, Language, Languages} from "../../models";
import {Subscription} from "rxjs";
import {TeambuilderLanguageService} from "../../services";
import {StringOrNumber} from "../../models/types";

/*
This component translates the displayed text by subscribing to the language changes stream in the TeambuilderViewService
 */

@Component({
  selector: 'translator2',
  templateUrl: './translator2.component.html'
})
export class Translator2Component implements OnDestroy {

  _content: StringOrNumber;

  _language: Language = Languages.ENGLISH;

  _english = '';

  _german = '';

  _french = '';

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

  @Input() set french(content: string) {
    this._french = content;
    if (this.languageIsFrench()) {
      this.setContent(content);
    }
  }

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this._subscription = this.tbLanguage.language.changes$
      .subscribe(language => {
        this._language = language;
        this.setContent(
          this.tbLanguage.translateFromTranslatable(
            createTranslatable(this._english, this._german, this._french)
          )
        );
      }
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private setContent(content: StringOrNumber) {
    if (content) {
      this._content = content;
    } else {
      this._content = this._english;
    }
  }

  private languageIsEnglish(): boolean { return this._language === Languages.ENGLISH; }

  private languageIsGerman(): boolean  { return this._language === Languages.GERMAN; }

  private languageIsFrench(): boolean { return this._language === Languages.FRENCH; }

}
