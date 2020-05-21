import {Pipe, PipeTransform} from '@angular/core';
import {IAbility, Languages} from "../../models";
import {testAbilities} from "../../data";
import {TeambuilderLanguageService} from "../../services";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Pipe({
  name: 'translateAbility'
})
export class TranslateAbilitiesPipe implements PipeTransform {

  abilities: IAbility[] = testAbilities;

  constructor(private tbLanguage: TeambuilderLanguageService) {}

  transform(abilities: any): Observable<string | string[]> {
    return this.tbLanguage.language.changes$
      .pipe(
        map(language => {
          switch (language) {
            case Languages.GERMAN:
              switch (typeof abilities) {
                case 'string': return this.getGermanAbility(abilities);
                default: return abilities.map(ability => this.getGermanAbility(ability)); // Array
              }
            default: return abilities;
          }
        })
      );
  }

  private getGermanAbility(ability: string): string {
    const abilityData: IAbility = this.abilities.find(a => a.name === ability);
    return (abilityData && abilityData.german) ? abilityData.german : ability;
  }

}
