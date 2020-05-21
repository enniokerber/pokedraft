import {Language, Languages} from "../models/types/Language";
import {ITranslatable} from "../models/api";

export function translate(language: Language, english: any = '', german: any = '', french: any = ''): string {
  switch (language) {
    case Languages.GERMAN: return german ? german : english;
    case Languages.FRENCH: return french ? french : english;
    default: return english;
  }
}

export function translateFromTranslatable(language: Language, translatableObject: ITranslatable): string {
  switch (language) {
    case Languages.GERMAN:
      if (translatableObject.german) {
        return translatableObject.german;
      }
      break;
    case Languages.FRENCH:
      if (translatableObject.french) {
      return translatableObject.french
    }
      break;
  }
  return translatableObject.english;
}
