import { Injectable } from '@angular/core';
import { BehaviorSubjectStream, ITranslatable, Language, LANGUAGE_COOKIE, languages, Languages } from '../../models';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TeambuilderLanguageService {

  private readonly _language: BehaviorSubjectStream<Language>;

  constructor(private cookieService: CookieService) {
    const cachedLanguage: Language = this.cookieService.get(LANGUAGE_COOKIE) as Language;
    if (cachedLanguage && languages.includes(cachedLanguage)) {
      this._language = new BehaviorSubjectStream<Language>(cachedLanguage);
    } else {
      this._language = new BehaviorSubjectStream<Language>(Languages.ENGLISH);
      this.setCookie();
    }
  }

  get language(): BehaviorSubjectStream<Language> {
    return this._language;
  }

  getCurrentLanguage(): Language {
    return this.language.getValue();
  }

  getCurrentLanguageAsProp(): string {
    return this.getCurrentLanguage().toLowerCase();
  }

  changeLanguage(lang: Language): void {
    this._language.update(lang);
    this.setCookie();
  }

  private setCookie(): void {
    this.cookieService.set(LANGUAGE_COOKIE, this._language.getValue());
  }

  translateFromTranslatable(translatable: ITranslatable): string {

    if (!translatable) {
      return '';
    }

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
