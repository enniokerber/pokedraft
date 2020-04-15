import {Pipe, PipeTransform} from '@angular/core';
import {IAbility} from '../../models/teambuilder/interfaces/IAbility';
import {TEST_ABILITIES} from '../../data/teambuilder/testAbilities';
import {Language} from '../../data/teambuilder/language';

@Pipe({
  name: 'translateAbility'
})
export class TranslateAbilitiesPipe implements PipeTransform {

  abilities: IAbility[] = TEST_ABILITIES;

  transform(abilities: any, language: Language): string | string[] {
    switch (language) {
      case Language.GERMAN:
        switch (typeof abilities) {
          case 'string': return this.getGermanAbility(abilities);
          default: return abilities.map(ability => this.getGermanAbility(ability)); // Array
        }
      default: return abilities;
    }
  }

  private getGermanAbility(ability: string): string {
    const abilityData: IAbility = this.abilities.find(a => a.name === ability);
    return (abilityData && abilityData.german) ? abilityData.german : ability;
  }

}
