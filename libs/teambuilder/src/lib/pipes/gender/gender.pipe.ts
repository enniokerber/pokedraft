import { Pipe, PipeTransform } from '@angular/core';
import { gendersWithLabels, ITranslatable } from '../../models';

@Pipe({
  name: 'genderToLabel'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): ITranslatable {
    return gendersWithLabels.find(g => g.id === value).label || {
      english: 'Unknown',
      german: 'k. A.'
    };
  }

}
