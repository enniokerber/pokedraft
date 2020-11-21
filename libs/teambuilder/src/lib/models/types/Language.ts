import {ITranslatable} from "../api/ITranslatable";

export enum Languages {
  ENGLISH = 'ENGLISH',
  GERMAN = 'GERMAN',
  FRENCH = 'FRENCH'
}

export type Language = 'ENGLISH' | 'GERMAN' | 'FRENCH';

export const languages: Language[] = [
  Languages.ENGLISH,
  Languages.GERMAN,
  Languages.FRENCH
];

export interface LanguageWithLabel {
  label: ITranslatable;
  value: Language;
}

export const LanguagesWithLabels: LanguageWithLabel[] = [
  {
    label: {
      english: 'English',
      german: 'Englisch'
    },
    value: Languages.ENGLISH
  },
  {
    label: {
      english: 'German',
      german: 'Deutsch'
    },
    value: Languages.GERMAN
  }
];

export const LANGUAGE_COOKIE = 'pd-language';
