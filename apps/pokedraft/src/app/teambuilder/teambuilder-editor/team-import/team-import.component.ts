import { Component } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {
  SubscriptionContainer,
  TeambuilderPokemonService,
  TeambuilderTeam, TeambuilderViewService
} from "@pokedraft/teambuilder";
import {map, switchMap} from "rxjs/operators";

enum EXPORT_OPTIONS {
  Showdown = 'Showdown',
  Pokedraft = 'Pokédraft'
}

type ExportOption = 'Showdown' | 'Pokédraft';

@Component({
  selector: 'pd-team-import',
  templateUrl: './team-import.component.html',
  styleUrls: ['./team-import.component.scss']
})
export class TeamImportComponent {

  SHOWDOWN_OPTION = EXPORT_OPTIONS.Showdown;
  POKEDRAFT_OPTION = EXPORT_OPTIONS.Pokedraft;

  exportOptions: ExportOption[] = [
    this.SHOWDOWN_OPTION,
    this.POKEDRAFT_OPTION
  ];

  selectedExportType: BehaviorSubject<ExportOption>;

  text: string;

  subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbView: TeambuilderViewService) {
    this.text = '';
    this.selectedExportType = new BehaviorSubject<ExportOption>(EXPORT_OPTIONS.Showdown);
    this.subscriptions = new SubscriptionContainer(
      this.selectedExportType.asObservable()
        .pipe(
          switchMap((exportOption: ExportOption): Observable<string> => {
            const teamChanges: Observable<TeambuilderTeam> = this.tbPokemon.team.changes$;
            switch (exportOption) {
              case EXPORT_OPTIONS.Showdown:
                return teamChanges
                  .pipe(map(team => team.toShowdownString()));
              case EXPORT_OPTIONS.Pokedraft:
                return teamChanges
                  .pipe(
                    map(team => team.getPokemon()),
                    map(pokemon => pokemon.map(p => p.toDatabaseRecord())),
                    map(pokemon => JSON.stringify(pokemon, null, 4))
                  );
              default: return of('');
            }
          })
        )
        .subscribe(exportText => {
          this.text = exportText;
        })
    );
  }

  refresh() { this.selectedExportType.next(this.selectedExportType.getValue()); }

  import() {
    switch (this.selectedExportType.getValue()) {
      case EXPORT_OPTIONS.Showdown: if (this.tbPokemon.importTeamFromShowdown(this.text)) this.close(); break;
      case EXPORT_OPTIONS.Pokedraft: if (this.tbPokemon.importTeamFromJSON(this.text)) this.close(); break;
    }
  }

  close() {
    this.tbView.displayStatistics();
  }

}
