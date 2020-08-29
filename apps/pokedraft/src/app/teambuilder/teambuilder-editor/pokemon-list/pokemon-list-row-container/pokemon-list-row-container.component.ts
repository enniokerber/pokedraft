import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  IPokemon,
  Language, Languages,
  TeambuilderLanguageService,
} from "@pokedraft/teambuilder";
import {Observable} from "rxjs";

@Component({
  selector: 'pokemon-list-row-container',
  templateUrl: './pokemon-list-row-container.component.html',
  styleUrls: ['./pokemon-list-row-container.component.scss']
})
export class PokemonListRowContainerComponent {

  @Input() pokemon: IPokemon[];

  @Output() onchoose: EventEmitter<IPokemon>;

  language$: Observable<Language>;
  ENGLISH_LANGUAGE: string = Languages.ENGLISH;

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this.pokemon = [];
    this.onchoose = new EventEmitter<IPokemon>();
    this.language$ = this.tbLanguage.language.changes$;
  }

  choosePokemon(pokemon: IPokemon): void {
    this.onchoose.emit(pokemon);
  }

}
