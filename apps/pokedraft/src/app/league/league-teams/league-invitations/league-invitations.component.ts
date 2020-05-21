import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {combineLatest, Observable, Subject, Subscription} from "rxjs";
import {
  IPokedraftUser,
  PokedraftLeagueService,
  PokedraftUserService,
} from "@pokedraft/core";
import {debounceTime, distinctUntilChanged, filter, map, shareReplay, switchMap, tap} from "rxjs/operators";
import {PdInputComponent} from "@pokedraft/material";
import {BOBS_UID} from "../../../../shared/data/testdata";

@Component({
  selector: 'pd-league-invitations',
  templateUrl: './league-invitations.component.html',
  styleUrls: ['./league-invitations.component.scss']
})
export class LeagueInvitationsComponent implements OnInit, OnDestroy {

  @ViewChild('playerId') playerIdInput: PdInputComponent;

  id: string;

  inputs: Subject<string>;
  inputsSubscription: Subscription;

  user: IPokedraftUser;
  validInvitation$: Observable<boolean>;

  searching: boolean;
  loading$: Observable<boolean>;
  notFound: boolean;

  invitationError: string;
  invitationSuccess: boolean;

  constructor(private userService: PokedraftUserService,
              private leagueService: PokedraftLeagueService) {
    this.id = BOBS_UID;
    this.inputs = new Subject<string>();
    this.user = null;
    this.validInvitation$ = null;
    this.searching = false;
    this.loading$ = this.leagueService.loading.asObservable();
    this.notFound = false;
    this.invitationError = '';
    this.invitationSuccess = false;

    this.inputsSubscription = this.inputs
      .pipe(
        filter(input => input && input !== ''),
        distinctUntilChanged(),
        debounceTime(300),
        tap(_ => {
          this.searching = true;
          this.notFound = false;
        }),
        switchMap(id => this.userService.getUserById(id)),
      ).subscribe(user => {
          this.searching = false;
          if (!user) {
            this.notFound = true;
            this.user = null;
            return;
          }
          this.user = user;
          this.validInvitation$ = this.validateUser(user.uid);
          this.notFound = false;
        });
  }

  ngOnInit(): void {
    this.searchUser();
  }

  ngOnDestroy(): void {
    this.inputsSubscription.unsubscribe();
  }

  searchUser(): void {
    this.inputs.next(this.id);
  }

  inviteUser(): void {
    this.invitationError = '';
    this.leagueService.inviteUser(this.user.uid)
      .then(() => {
        this.invitationSuccess = true;
        this.id = '';
        this.user = null;
        this.playerIdInput.focus();
        setTimeout(() => this.invitationSuccess = false, 1200);
        console.log('Sent the invitation!')
      })
      .catch(error => {
        this.invitationError = 'An error occurred when sending the invitation';
        console.log(error);
      });
  }

  private validateUser(uid: string): Observable<boolean> {
    return this.leagueService.currentLeagueChanges$
      .pipe(
        map(league => this.leagueService.userValidToBeInvited(this.user.uid)),
        shareReplay()
      )
  }

}
