import {Component} from '@angular/core';
import {
  TeambuilderPokemon,
  TeambuilderPokemonService
} from "@pokedraft/teambuilder";
import {Observable} from "rxjs";

@Component({
  selector: 'pd-teambar',
  templateUrl: './teambar.component.html',
  styleUrls: ['./teambar.component.scss']
})
export class TeambarComponent{

  team$: Observable<TeambuilderPokemon[]>;

  selectedPokemon$: Observable<TeambuilderPokemon>;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.team$ = this.tbPokemon.currentTeampokemon$;
    this.selectedPokemon$ = this.tbPokemon.selectedPokemon.changes$;
  }

  selectPokemon(pokemon: TeambuilderPokemon): void {
    const currentPokemon = this.tbPokemon.selectedPokemon.getValue();
    if (currentPokemon === null || pokemon.teambuilderPokemonId !== currentPokemon.teambuilderPokemonId) {
      this.tbPokemon.selectTeampokemon(pokemon);
    }
  }

  createPokemon(): void {
    if (this.tbPokemon.selectedPokemon.getValue() !== null) {
      this.tbPokemon.selectTeampokemon(null);
    }
  }

  deletePokemon(id: number): void {
    this.tbPokemon.deleteTeampokemon(id);
  }

}
