import { Component, OnInit } from '@angular/core';
import {
  ITeambuilderTeamSnippet, TeambuilderApiService,
  TeambuilderPokemonArray, TeambuilderPokemonService
} from '@pokedraft/teambuilder';
import { Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, first, map, switchMap, tap } from 'rxjs/operators';
import { LoadingZone } from '@pokedraft/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-teambuilder-teams',
  templateUrl: './teambuilder-teams.component.html',
  styleUrls: ['./teambuilder-teams.component.scss']
})
export class TeambuilderTeamsComponent implements OnInit {

  teams$: Observable<ITeambuilderTeamSnippet[]>;

  teampokemon$: Observable<TeambuilderPokemonArray>;

  selectTeam$: Subject<string>;

  usersTeamsLoadingZone: LoadingZone;
  currentTeamLoadingZone: LoadingZone;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbApi: TeambuilderApiService,
              private router: Router) {
    this.selectTeam$ = new Subject<string>();
    this.usersTeamsLoadingZone = new LoadingZone();
    this.currentTeamLoadingZone = new LoadingZone();
  }

  ngOnInit(): void {
    this.usersTeamsLoadingZone.inc();
    this.teams$ = this.tbApi.getFakeTeamPreviews()
      .pipe(
        first(),
        finalize(() => this.usersTeamsLoadingZone.dec()),
      );
    this.teampokemon$ = this.selectTeam$.asObservable()
      .pipe(
        distinctUntilChanged(),
        tap(id => console.log(`Loading Team #${id}`)),
        tap(_ => this.currentTeamLoadingZone.inc()),
        switchMap(id => this.tbApi.getTeam(id)
          .pipe(
            first(),
            tap(team => console.log(team)),
            map(team => team ? team.pokemon.map(pokemon => this.tbPokemon.createTeambuilderPokemonFromDBRecord(pokemon)) : null),
            catchError(() => {
              return of([]);
            }),
            finalize(() => this.currentTeamLoadingZone.dec())
          )
        )
      );
  }

  selectTeam(id: string): void { this.selectTeam$.next(id); }

  openTeam(id: string): void { this.router.navigateByUrl(`teambuilder/editor/${id}`); }

}
