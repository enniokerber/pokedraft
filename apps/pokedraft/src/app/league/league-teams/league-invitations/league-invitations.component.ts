import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";
import {
  IPokedraftUser,
  PokedraftLeagueService,
  PokedraftUserService,
} from "@pokedraft/core";
import {debounceTime, distinctUntilChanged, filter, switchMap, tap} from "rxjs/operators";
import {InputComponent} from "@pokedraft/material";

@Component({
  selector: 'pd-league-invitations',
  templateUrl: './league-invitations.component.html',
  styleUrls: ['./league-invitations.component.scss']
})
export class LeagueInvitationsComponent implements OnInit, OnDestroy {

  @ViewChild('playerId') playerIdInput: InputComponent;

  id: string;

  inputs: Subject<string>;
  inputsSubscription: Subscription;

  result: IPokedraftUser;

  searching: boolean;
  loading$: Observable<boolean>;
  notFound: boolean;

  invitationError: string;
  invitationSuccess: boolean;

  validUser: boolean;

  constructor(private userService: PokedraftUserService,
              private leagueService: PokedraftLeagueService) {
    this.id = 'AtKHyRCFERYmTT50E4RN3KZXh8d2';
    this.inputs = new Subject<string>();
    this.searching = false;
    this.loading$ = this.leagueService.loading.asObservable();
    this.notFound = false;
    this.validUser = false;
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
        tap(user => {
          this.searching = false;
          this.validUser = this.leagueService.userIsValidToBeInvited(user);
          if (!user) {
            this.notFound = true;
            this.result = null;
            return;
          }
          this.result = user;
          this.notFound = false;
        })
      )
      .subscribe();
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
    this.leagueService.inviteUser(this.result)
      .then(() => {
        this.invitationSuccess = true;
        this.id = '';
        this.result = null;
        this.playerIdInput.focus();
        setTimeout(() => this.invitationSuccess = false, 1200);
        console.log('Sent the invitation!')
      })
      .catch(error => this.invitationError = 'An error occurred when sending the invitation');
  }

}
