import { Injectable } from '@angular/core';
import {BehaviorSubjectStream, ITranslatable, Language, Languages} from "../../models";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class TeambuilderLanguageService {

  private readonly _language: BehaviorSubjectStream<Language>;

  constructor() {
    this._language = new BehaviorSubjectStream<Language>(Languages.GERMAN);
  }

  get language(): BehaviorSubjectStream<Language> {
    return this._language;
  }

  changeLanguage(lang: Language): void {
    this._language.update(lang);
  }

  translateFromTranslatable(translatable: ITranslatable): string {
    switch (this.language.getValue()) {
      case Languages.GERMAN:
        if (translatable.german) {
          return translatable.german;
        }
        break;
      case Languages.FRENCH:
        if (translatable.french) {
          return translatable.french
        }
        break;
    }
    return translatable.english;
  }

  createTranslatorStream(translatable: ITranslatable): Observable<string> {
    return this.language.changes$.pipe(map(_ => this.translateFromTranslatable(translatable)));
  }
}
