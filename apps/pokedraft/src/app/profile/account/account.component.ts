import {Component, OnInit, ViewChild} from '@angular/core';
import {PopUpAnimation} from "@pokedraft/material";
import {Observable} from "rxjs";
import {IPokedraftUser, PokedraftAuthService} from "@pokedraft/core";
import {tap} from "rxjs/operators";
import {PdInputComponent} from "@pokedraft/material";

@Component({
  selector: 'pd-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [
    PopUpAnimation
  ]
})
export class AccountComponent implements OnInit {

  @ViewChild('usernameInput') usernameInputElement: PdInputComponent;

  user: IPokedraftUser;

  authedUser$: Observable<IPokedraftUser>;

  usernameSaveSuccess: boolean;
  descriptionSaveSuccess: boolean;

  updateError: string;

  showChooseFileWindow: boolean;

  constructor(private auth: PokedraftAuthService) {
    this.usernameSaveSuccess = false;
    this.descriptionSaveSuccess = false;
    this.user = null;
    this.authedUser$ = this.auth.user$
      .pipe(
        tap(user => {
          this.user = user ? Object.assign({}, user) : null;
        })
      );
    this.updateError = '';
    this.showChooseFileWindow = false;
  }

  ngOnInit(): void {
  }

  changeUsername(): void {
    this.resetError();
    this.auth.updateUsername(this.user.username)
      .then(() => {
        this.usernameSaveSuccess = true;
        this.disableSuccessIcons();
      })
      .catch((error) => {
        console.log(error);
        this.updateError = 'Could not update your username (note: 3-12 characters allowed).'
      })
  }

  changeProfileDescription(): void {
    this.resetError();
    this.auth.updateProfileDescription(this.user.profileDescription)
      .then(() => {
        this.descriptionSaveSuccess = true;
        this.disableSuccessIcons();
      })
      .catch((error) => {
        console.log(error);
        this.updateError = 'Could not update your profile description.'
      });
  }

  changeProfilePicture(url: string): void {
    this.closeFileChooser();
    this.resetError();
    this.auth.updateProfilePicture(url)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        this.updateError = 'Could not update your profile picture.';
      })
  }

  resetError(): void {
    this.updateError = '';
  }

  disableSuccessIcons(): void {
    setTimeout(() => {
      this.usernameSaveSuccess = false;
      this.descriptionSaveSuccess = false;
    }, 1000)
  }

  openFileChooser(): void {
    this.showChooseFileWindow = true;
  }

  closeFileChooser(): void {
    this.showChooseFileWindow = false;
  }

}
