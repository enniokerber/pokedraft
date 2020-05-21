import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TeambuilderLanguageService} from "../../services";
import {Language, Languages} from "../../models";


@Directive({
  selector: '[translatableTitle]'
})
export class TranslatableTitleDirective implements OnDestroy {

  @Input() set englishTitle(englishTitle: string) {
    this._englishTitle = englishTitle;
    if (this.languageIsEnglish()) {
      this.setContent(englishTitle);
    }
  }

  @Input() set germanTitle(germanTitle: string) {
    this._germanTitle = germanTitle;
    if (this.languageIsGerman()) {
      this.setContent(germanTitle);
    }
  }

  private _englishTitle: string;

  private _germanTitle: string;

  private _language: Language;

  private subscription: Subscription;

  constructor(private elem: ElementRef,
              private tbLanguage: TeambuilderLanguageService) {
    this._language = Languages.ENGLISH;
    this.subscription = Subscription.EMPTY;
    this.subscription = this.tbLanguage.language.changes$.subscribe((language) => {
      this.translate(language);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  translate(language: Language) {
    this._language = language;
    switch (language) {
      case Languages.GERMAN:
        this.setContent(this._germanTitle);
        break;
      default:
        this.setContent(this._englishTitle);
    }
  }

  setContent(content: string) {
    if (content) {
      this.elem.nativeElement.setAttribute('title', content);
    } else {
      if (this._englishTitle) {
        this.setContent(this._englishTitle);
        console.log('No translation to use, fallback to english.');
        return;
      }
      console.log('No translation to use, did nothing.');

    }
  }

  private languageIsEnglish(): boolean { return this._language === Languages.ENGLISH; }

  private languageIsGerman(): boolean  { return this._language === Languages.GERMAN; }

  private languageIsFrench(): boolean { return this._language === Languages.FRENCH; }

}
