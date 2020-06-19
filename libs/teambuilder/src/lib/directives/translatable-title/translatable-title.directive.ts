import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TeambuilderLanguageService} from "../../services";
import {Language, Languages} from "../../models";


@Directive({
  selector: '[translatableTitle]'
})
export class TranslatableTitleDirective implements AfterViewInit, OnDestroy {

  @Input() set englishTitle(englishTitle: string) {
    this._englishTitle = englishTitle;
    if (this.languageIsEnglish()) {
      this.renewSource();
    }
  }

  @Input() set germanTitle(germanTitle: string) {
    this._germanTitle = germanTitle;
    if (this.languageIsGerman()) {
      this.renewSource();
    }
  }

  private _englishTitle: string;

  private _germanTitle: string;

  private _language: Language = Languages.ENGLISH;

  private subscription: Subscription = Subscription.EMPTY;

  constructor(private elem: ElementRef,
              private tbLanguage: TeambuilderLanguageService) {
  }

  ngAfterViewInit(): void {
    this.renewSource();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  renewSource(): void {
    this.unsubscribe();
    this.subscription = this.tbLanguage.createTranslatorStream({
      english: this._englishTitle,
      german: this._germanTitle
    }).subscribe(translatedTitle => this.setContent(translatedTitle));
  }

  setContent(content: string): void {
    this.elem.nativeElement.setAttribute('title', content);
  }

  private unsubscribe() { this.subscription.unsubscribe(); }

  private languageIsEnglish(): boolean { return this._language === Languages.ENGLISH; }

  private languageIsGerman(): boolean  { return this._language === Languages.GERMAN; }
}
