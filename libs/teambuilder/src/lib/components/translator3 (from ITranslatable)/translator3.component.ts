import {Component, Input} from '@angular/core';
import {ITranslatable} from "../../models";
import {Observable} from "rxjs";
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
export class Translator3Component {

  @Input() set source(translatable: ITranslatable) {
    this.content$ = this.tbLanguage.createTranslatorStream(translatable);
  }

  public content$: Observable<string>;

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this.content$ = null;
  }
}
