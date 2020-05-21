import {ILongShort} from "@pokedraft/core";

export interface ITranslatable {
  english: string;
  german?: string;
  french?: string;
}

export interface ITranslatableWithTitle {
  name: ITranslatable;
  title: ITranslatable;
}

export function emptyTranslatable(): ITranslatable {
  return ({
    english: '',
    german: '',
    french: ''
  })
}

export function emptyLongShortTranslatable(): ILongShort<ITranslatable> {
  return ({
    long: emptyTranslatable(),
    short: emptyTranslatable()
  })
}

export function createTranslatable(english: string, german?: string, french?: string) {
  const translatable = emptyTranslatable();
  translatable.english = english;
  translatable.german = german;
  translatable.french = french;
  return translatable;
}
