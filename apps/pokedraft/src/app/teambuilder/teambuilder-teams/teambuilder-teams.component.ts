import { Component, OnInit } from '@angular/core';
import {
  ITeambuilderTeamSnippet, TeambuilderApiService,
  TeambuilderPokemonArray, TeambuilderPokemonService
} from '@pokedraft/teambuilder';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  filter,
  finalize,
  first,
  map,
  shareReplay,
  switchMap,
  tap
} from 'rxjs/operators';
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

  selectTeam$: BehaviorSubject<string>;

  selectedTeamId$: Observable<string>;

  usersTeamsLoadingZone: LoadingZone;
  currentTeamLoadingZone: LoadingZone;

  constructor(private tbPokemon: TeambuilderPokemonService,
              private tbApi: TeambuilderApiService,
              private router: Router) {
    this.selectTeam$ = new BehaviorSubject<string>(null);
    this.selectedTeamId$ = this.selectTeam$.asObservable();
    this.usersTeamsLoadingZone = new LoadingZone();
    this.currentTeamLoadingZone = new LoadingZone();
  }

  ngOnInit(): void {
    this.usersTeamsLoadingZone.inc();
    this.teams$ = this.tbApi.getFakeTeamPreviews()
      .pipe(
        tap((teams: ITeambuilderTeamSnippet[]) => {
          if (teams.length > 0) {
            this.selectTeam(teams[0].id);
          }
        }),
        shareReplay(),
      );
    this.teampokemon$ = this.selectTeam$.asObservable()
      .pipe(
        filter(id => !!id),
        distinctUntilChanged(),
        tap(_ => this.currentTeamLoadingZone.inc()),
        switchMap(id => this.tbApi.getTeam(id)
          .pipe(
            first(),
            map(team => team ? team.pokemon.map(pokemon => this.tbPokemon.createTeambuilderPokemonFromDBRecord(pokemon)) : null),
            catchError(() => of([])),
            finalize(() => this.currentTeamLoadingZone.dec())
          )
        )
      );
  }

  selectTeam(id: string): void { this.selectTeam$.next(id); }

  deleteTeam(id: string): void { this.tbApi.deleteTeam(id); }

  openTeam(id: string): void { this.router.navigateByUrl(`teambuilder/editor/${id}`); }

}
