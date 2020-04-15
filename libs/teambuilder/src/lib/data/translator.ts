import {Language, Languages} from "../models/types/Language";

export function translate(language: Language, english: any = '', german: any = '', french: any = '') {
  switch (language) {
    case Languages.GERMAN: return german ? german : english;
    case Languages.FRENCH: return french ? french : english;
    default: return english;
  }
}
