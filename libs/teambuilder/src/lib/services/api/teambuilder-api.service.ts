import { Injectable } from '@angular/core';
import {
  allWithDocumentId,
  extractDocumentDataWithId,
  IPokedraftUserSnippet, LoadingState,
  PokedraftAuthService
} from '@pokedraft/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITeambuilderTeam, ITeambuilderTeamSnippet } from '../../models';
import { Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { TeambuilderPokemonService } from '../pokemon/teambuilder-pokemon.service';

@Injectable()
export class TeambuilderApiService {

  saveRequestState: LoadingState;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore,
              private tbPokemon: TeambuilderPokemonService) {
    this.saveRequestState = new LoadingState();
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
        extractDocumentDataWithId(),
        catchError(() => of(null))
      );
  }

  private persistTeam(): Promise<void> {
    if (this.tbPokemon.getTeamId()) {
      console.error('This league seems to already be persisted in the database. I will not persist it again.');
      return Promise.reject();
    }
    const author: IPokedraftUserSnippet = this.auth.getCurrentUserSnippet();
    const team = this.tbPokemon.getTeam();
    const pokemon = this.tbPokemon.getTeampokemonAsDatabaseRecords();
    const date = Date.now();
    return this.afs.collection<ITeambuilderTeam>(`teams`).add({
      author,
      name: team.name,
      tier: team.tier,
      public: team.public,
      pokemon,
      lastUpdate: date,
      createdAt: date
    }).then(doc => {
      team.setId(doc.id);
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
    const pokemon = this.tbPokemon.getTeampokemonAsDatabaseRecords();
    const lastUpdate = Date.now();
    return this.afs.doc<ITeambuilderTeam>(`teams/${id}`).update({
      pokemon,
      lastUpdate
    }).then(() => {
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

}
