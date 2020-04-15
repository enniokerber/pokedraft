
export interface ITranslatable {
  english: string;
  german?: string;
  french?: string;
}

export interface ITranslatableWithTitle {
  name: ITranslatable;
  title: ITranslatable;
}
