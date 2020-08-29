import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ITeambuilderTeam } from '../../models';
import { TeambuilderApiService, TeambuilderPokemonService } from '../../services';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class TeamResolver implements Resolve<ITeambuilderTeam> {

  constructor(private tbApi: TeambuilderApiService,
              private tbPokemon: TeambuilderPokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITeambuilderTeam> | Promise<ITeambuilderTeam> | ITeambuilderTeam {
    const id = route.paramMap.get('teamid');
    console.log(`Resolving Team-ID [${id}] ...`);
    return (id ? this.tbApi.getTeam(id) : of(null))
      .pipe(tap(team => this.tbPokemon.setTeam(team)));
  }

}
