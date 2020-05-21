import {Component, Input, OnDestroy} from '@angular/core';
import {ITranslatable} from "../../models";
import {Subscription} from "rxjs";
import {StringOrNumber} from "../../models/types";
import {TeambuilderLanguageService} from "../../services";

/*
This component translates the displayed text by subscribing to the language changes
stream in the TeambuilderViewService,
but it uses an ITranslatable object for translation wheras Translator2 received separated [english], [german], inputs
 */

@Component({
  selector: 'translator3',
  templateUrl: './translator3.component.html'
})
export class Translator3Component implements OnDestroy {

  @Input() set source(translatable: ITranslatable) {
    this.subscription.unsubscribe();
    this.subscription = this.tbLanguage.createTranslatorStream(translatable)
      .subscribe(translatedString => this.setContent(translatedString) );
  }

  content: StringOrNumber = '';

  private subscription: Subscription;

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this.subscription = Subscription.EMPTY;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setContent(content: StringOrNumber) {
    this.content = content;
  }
}
