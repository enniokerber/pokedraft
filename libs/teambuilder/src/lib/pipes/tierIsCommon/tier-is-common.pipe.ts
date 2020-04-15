import { Pipe, PipeTransform } from '@angular/core';
import {ITier} from '../../models/teambuilder/interfaces/ITier';

@Pipe({
  name: 'tierIsCommon'
})
export class TierIsCommonPipe implements PipeTransform {

  transform(tier: ITier[]): ITier[] {
    return tier.filter(t => t.isCommon === true);
  }

}
