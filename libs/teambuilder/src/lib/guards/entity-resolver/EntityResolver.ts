import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { TeambuilderApiService, TeambuilderLoggingService, TeambuilderStoreService } from '../../services';
import { tap } from 'rxjs/operators';

@Injectable()
export class EntityResolver implements Resolve<any> {

  constructor(private tbApi: TeambuilderApiService,
              private tbStore: TeambuilderStoreService,
              private tbLogger: TeambuilderLoggingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.tbLogger.getLogger().debug('Called Entity-Resolver: Fetching entities ...');
    return forkJoin([
      this.tbApi.getPokemon(),
      this.tbApi.getItems(),
      this.tbApi.getAbilities()
    ]).pipe(
      tap(([ pokemon, items, abilities ]) => {
        this.tbStore.pokemonlist.setEntities(pokemon);
        this.tbStore.setItems(items);
        this.tbStore.setAbilities(abilities);
      })
    );
  }

}
