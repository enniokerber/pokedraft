import {Pipe, PipeTransform} from '@angular/core';
import {TeambuilderLanguageService, TeambuilderStoreService} from "../../services";
import {Observable} from "rxjs";

@Pipe({
  name: 'findAbilityName'
})
export class FindAbilityNamePipe implements PipeTransform {

  constructor(private tbLanguage: TeambuilderLanguageService,
              private tbStore: TeambuilderStoreService) {}

  transform(abilityId: string): Observable<string> {
    return this.tbLanguage.createTranslatorStream(
      this.tbStore.getAbilityById(abilityId)?.name
    );
  }

}
