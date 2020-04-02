import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {IPokedraftLeague} from "@pokedraft-fire/models";
import {AngularFirestore} from "@angular/fire/firestore";
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap, throttleTime} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pd-enter-league',
  templateUrl: './enter-league.component.html',
  styleUrls: ['./enter-league.component.scss']
})
export class EnterLeagueComponent implements OnInit, OnDestroy {

  id: string;

  inputs: Subject<string>;
  inputsSubscription: Subscription;
  routerSubscription: Subscription;

  league: IPokedraftLeague;

  loading: boolean;
  notFound: boolean;

  constructor(private afs: AngularFirestore,
              private actRoute: ActivatedRoute) {
    this.id = '';
    this.inputs = new Subject<string>();
    this.league = null;
    this.loading = false;
    this.notFound = false;

    this.inputsSubscription = this.inputs
      .pipe(
        filter(input => input && input !== ''),
        distinctUntilChanged(),
        debounceTime(300),
        tap(_ => {
          this.loading = true;
          this.notFound = false;
        }),
        switchMap(id => this.afs.doc<IPokedraftLeague>(`leagues/${id}`).valueChanges()),
        tap(league => {
          this.league = league;
          this.loading = false;
          if (!league) {
            this.notFound = true;
          }
        })
      )
      .subscribe();
    this.routerSubscription = this.actRoute.params.subscribe(
      ({ id }) => {
        this.id = id;
        console.log(id);
        this.searchLeague();
      }
    );
  }

  ngOnInit(): void {
    this.searchLeague();
  }

  ngOnDestroy(): void {
    this.inputsSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  searchLeague(): void {
    this.inputs.next(this.id);
  }

}
