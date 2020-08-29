import { Pipe, PipeTransform } from '@angular/core';
import { TeambuilderLanguageService } from '../../services';
import { Observable } from 'rxjs';
import { ITranslatable } from '../../models';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private tbLanguage: TeambuilderLanguageService) {}

  transform(value: ITranslatable): Observable<string> {
    return this.tbLanguage.createTranslatorStream(value);
  }

}
