import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {ITranslatable} from "../../models";
import {Subscription} from "rxjs";
import {TeambuilderLanguageService} from "../../services";

@Directive({
  selector: '[translatableTitle2]'
})
export class TranslatableTitle2Directive implements AfterViewInit, OnDestroy {

  @Input('translatableTitle2') translatable: ITranslatable;

  private subscription: Subscription;

  constructor(private elem: ElementRef,
              private tbLanguage: TeambuilderLanguageService) {
    this.translatable = null;
  }

  ngAfterViewInit(): void {
    this.subscription = this.tbLanguage.createTranslatorStream(this.translatable)
      .subscribe(translatedString => this.setContent(translatedString))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setContent(content: string) {
    this.elem.nativeElement.setAttribute('title', content);
  }

}
