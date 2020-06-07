import {Component, Input} from '@angular/core';

@Component({
  selector: 'pd-pokemon-icon',
  templateUrl: './pokemon-icon.component.html'
})
export class PokemonIconComponent {

  @Input() imgSrc: string;

  constructor() { }

}
