import { Injectable } from '@angular/core';
import {
  PokedraftAuthService,
  extractDocumentDataWithId,
  allWithDocumentId
} from '@pokedraft/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITeambuilderPokemon, ITeambuilderTeam, ITeambuilderTeamSnippet } from '../../models';
import { Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { TeambuilderPokemonService } from '../pokemon/teambuilder-pokemon.service';

@Injectable()
export class TeambuilderApiService {

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore,
              private tbPokemon: TeambuilderPokemonService) {
  }

  getFakeTeamPreviews(): Observable<ITeambuilderTeamSnippet[]> {
    return this.auth.user$
      .pipe(
        switchMap(user => this.afs.collection<ITeambuilderTeam>(`teams`, ref => ref.where('author.uid', '==', user.uid))
          .snapshotChanges()
          .pipe(allWithDocumentId)
        ),
        map(teams => teams.map(team => ({
            id: team.id,
            name: team.name,
            tier: team.tier,
            pokemon: team.pokemon.map(p => p.id)
          } as ITeambuilderTeamSnippet))
        ),
        catchError(() => of([]))
      );
  }

  getTeam(id: string): Observable<ITeambuilderTeam> {
    return this.afs.doc(`teams/${id}`)
      .snapshotChanges()
      .pipe(
        first(),
        extractDocumentDataWithId,
        catchError(() => of(null))
      );
  }

  updateCurrentTeam(): Promise<void> {
    const id = this.tbPokemon.getTeamId();
    if (!id) {
      console.log(`No team id present. Cannot update team.`);
      return Promise.reject();
    }
    const pokemon = this.tbPokemon.currentTeampokemon.getValue();
    const pokemonDBRecord: ITeambuilderPokemon[] = pokemon.map(p => p.toDatabaseRecord());
    const date = Date.now();
    console.log(pokemonDBRecord);
    return this.afs.doc<ITeambuilderTeam>(`teams/${id}`).update({
      pokemon: pokemonDBRecord,
      lastUpdate: date
    }).then(() => console.log('Updated Team :)'));
  }

}
