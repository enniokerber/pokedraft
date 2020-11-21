import { Injectable } from '@angular/core';
import {
  allWithDocumentId,
  withDocumentId,
  IPokedraftUserSnippet, LoadingState,
  PokedraftAuthService, extractDataFromSnapshot
} from '@pokedraft/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IAbility, IItem, IPokemon, ITeambuilderTeam, ITeambuilderTeamSnippet } from '../../models';
import { Observable, of } from 'rxjs';
import { catchError, first, map, switchMap, tap } from 'rxjs/operators';
import { TeambuilderPokemonService } from '../pokemon/teambuilder-pokemon.service';

@Injectable()
export class TeambuilderApiService {

  saveRequestState: LoadingState;
  deleteRequestState: LoadingState;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore,
              private tbPokemon: TeambuilderPokemonService) {
    this.saveRequestState = new LoadingState();
    this.deleteRequestState = new LoadingState();
  }

  getPokemon(): Observable<IPokemon[]> {
    return this.afs.doc<IPokemon[]>('static-data/pokedex')
      .get()
      .pipe(
        catchError(err => of({ pokemon: [] })),
        extractDataFromSnapshot('pokemon'),
        tap(pokemon => console.log('Loaded Pokémon: ', pokemon))
      );
  }

  getItems(): Observable<IItem[]> {
    return this.afs.doc('static-data/items')
      .get()
      .pipe(
        catchError(err => of({ items: {} })),
        extractDataFromSnapshot('items'),
        tap(items => console.log('Loaded Items: ', items))
      );
  }

  getAbilities(): Observable<IAbility[]> {
    return this.afs.doc('static-data/abilities')
      .get()
      .pipe(
        catchError(err => of({ abilities: {} })),
        extractDataFromSnapshot('abilities'),
        tap(abilities => console.log('Loaded Abilities: ', abilities))
      );
  }

  getFakeTeamPreviews(): Observable<ITeambuilderTeamSnippet[]> {
    return this.auth.user$
      .pipe(
        switchMap(user => this.afs.collection<ITeambuilderTeam>(`teams`,
            ref => ref.where('author.uid', '==', user.uid).orderBy('lastUpdate', 'desc'))
          .snapshotChanges()
          .pipe(allWithDocumentId())
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
        withDocumentId(),
        catchError(() => of(null))
      );
  }

  private persistTeam(): Promise<void> {
    if (this.tbPokemon.getTeamId()) {
      console.error('This team seems to already be persisted in the database. I will not persist it again.');
      return Promise.reject();
    }
    const author: IPokedraftUserSnippet = this.auth.getCurrentUserSnippet();
    if (!author) {
      console.error('Auth-Service did not return an authenticated user, thus no team author is provided. The team therefore cannot be saved.');
      Promise.reject();
    }
    const team = this.tbPokemon.getTeam();
    team.setAuthor(author);
    return this.afs.collection<ITeambuilderTeam>(`teams`)
      .add(team.asDatabaseRecord())
      .then(({ id }) => {
        team.setId(id);
        team.setLastUpdate();
      }).catch(() => console.error('Failed to persist the new team.'));
  }

  private updateCurrentTeam(): Promise<void> {
    const id = this.tbPokemon.getTeamId();
    if (!id) {
      console.log(`No team id present. Cannot update team.`);
      return Promise.reject();
    }
    const team = this.tbPokemon.getTeam();
    return this.afs.doc<ITeambuilderTeam>(`teams/${id}`)
      .update(team.asUpdateDatabaseRecord())
      .then(() => {
        team.setLastUpdate();
      });
  }

  saveTeam(): Promise<void> {
    if (this.tbPokemon.getTeamId()) {
      return this.saveRequestState.loadFromPromise(() => this.updateCurrentTeam());
    } else {
      return this.saveRequestState.loadFromPromise(() => this.persistTeam());
    }
  }

  deleteTeam(id: string): Promise<void> {
    return this.deleteRequestState.loadFromPromise(() =>
      this.afs.doc(`teams/${id}`).delete()
        .then(() => {
          if (this.tbPokemon.getTeamId() === id) {
            console.log('Reset Team');
            this.tbPokemon.clearTeam();
          }
        })
    );
  }

}
