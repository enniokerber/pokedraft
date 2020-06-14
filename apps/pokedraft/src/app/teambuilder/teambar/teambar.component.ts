import {Component} from '@angular/core';
import {
  TeambuilderPokemon,
  TeambuilderPokemonService
} from "@pokedraft/teambuilder";
import {Observable} from "rxjs";

@Component({
  selector: 'teambar',
  templateUrl: './teambar.component.html',
  styleUrls: ['./teambar.component.scss']
})
export class TeambarComponent{

  team$: Observable<TeambuilderPokemon[]>;

  selectedPokemon$: Observable<TeambuilderPokemon>;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.team$ = this.tbPokemon.team.changes$;
    this.selectedPokemon$ = this.tbPokemon.selectedTeampokemon.changes$;
  }

  selectPokemon(pokemon: TeambuilderPokemon): void {
    const currentPokemon = this.tbPokemon.selectedTeampokemon.getValue();
    if (currentPokemon === null || pokemon.teambuilderPokemonId !== currentPokemon.teambuilderPokemonId) {
      this.tbPokemon.selectTeampokemon(pokemon);
    }
  }

  createPokemon(): void {
    if (this.tbPokemon.selectedTeampokemon.getValue() !== null) {
      this.tbPokemon.selectTeampokemon(null);
    }
  }

  deletePokemon(id: number): void {
    this.tbPokemon.deleteTeampokemon(id);
  }

}
