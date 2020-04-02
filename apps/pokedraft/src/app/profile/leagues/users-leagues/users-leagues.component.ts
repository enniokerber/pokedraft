import { Component, OnInit } from '@angular/core';
import {IPokedraftLeague} from "@pokedraft-fire/models";
import {Observable, of} from "rxjs";
import {PokedraftAuthService} from "../../../../shared/services/auth/pokedraft-auth.service";
import {map, switchMap, tap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'pd-users-leagues',
  templateUrl: './users-leagues.component.html',
  styleUrls: ['./users-leagues.component.scss']
})
export class UsersLeaguesComponent implements OnInit {

  leagues$: Observable<IPokedraftLeague[]>;

  constructor(private auth: PokedraftAuthService,
              private afs: AngularFirestore) {
    this.leagues$ = this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.collection<IPokedraftLeague>(`leagues`,
              ref => ref
                .where('users', 'array-contains', user.uid)
                .orderBy('createdAt', 'desc')
          ).valueChanges();
        } else {
          return of([]);
        }
      })
    );
  }

  ngOnInit(): void {
  }

}
