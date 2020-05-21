import { Pipe, PipeTransform } from '@angular/core';
import {IPokemon} from "@pokedraft/teambuilder";

@Pipe({
  name: 'tierFilter'
})
export class TierFilterPipe implements PipeTransform {

  transform(pokemon: IPokemon[], tier: string, trigger?: any): IPokemon[] {
    return pokemon.filter(p => p.tier === tier);
  }

}
