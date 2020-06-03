import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {ITranslatable} from "../../models";
import {Subscription} from "rxjs";
import {TeambuilderLanguageService} from "../../services";

@Directive({
  selector: '[translateAttribute]'
})
export class TranslateAttributeDirective implements AfterViewInit, OnDestroy {

  @Input('translateAttribute') attribute: string;

  @Input() source: ITranslatable;

  @Input() format: string; // ex: '? +' will put the translated source at the ?

  private subscription: Subscription;

  constructor(private elem: ElementRef,
              private tbLanguage: TeambuilderLanguageService) {
    this.attribute = '';
    this.source = null;
  }

  ngAfterViewInit(): void {
    this.subscription = this.tbLanguage.createTranslatorStream(this.source)
      .subscribe(translatedString => this.setContent(translatedString))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setContent(content: string) {
    if (this.attribute) {

      if (this.format) {
        content = this.format.replace('?', content);
      }

      this.elem.nativeElement.setAttribute(this.attribute, content);
    }
  }

}
