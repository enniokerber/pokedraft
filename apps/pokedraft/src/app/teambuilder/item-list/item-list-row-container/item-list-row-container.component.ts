import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IItem, TeambuilderPokemonService} from "@pokedraft/teambuilder";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'pd-item-list-row-container',
  templateUrl: './item-list-row-container.component.html'
})
export class ItemListRowContainerComponent {

  @Input() items: IItem[];

  @Input() markedId: number;

  @Output() choose: EventEmitter<IItem>;

  selectedTeampokemonsItem$: Observable<IItem>;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.items = [];
    this.markedId = -1;
    this.choose = new EventEmitter<IItem>();
    this.selectedTeampokemonsItem$ = this.tbPokemon.selectedTeampokemon.changes$
      .pipe(map(pokemon => pokemon ? pokemon.getItem() : null))
  }

  selectItem(item: IItem): void {
    this.choose.emit(item);
  }

}
