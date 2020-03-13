import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PokedraftAuthService } from '../../../shared/services/auth/pokedraft-auth.service';

@Component({
  selector: 'pd-choose-username',
  templateUrl: './choose-username.component.html',
  styleUrls: ['./choose-username.component.scss']
})
export class ChooseUsernameComponent implements OnInit {

  usernameFormError: string;
  usernameForm: FormGroup;

  loading$: Observable<boolean>;

  success: boolean;

  constructor(private fb: FormBuilder,
              private auth: PokedraftAuthService) {
    this.usernameFormError = '';
    this.usernameForm = this.fb.group({
      username: ['Whatever', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
    this.loading$ = this.auth.loading.asObservable();
    this.success = false;
  }

  ngOnInit(): void {
  }

  get username(): AbstractControl { return this.usernameForm.get('username'); }

  saveUsername(): void {
    if (this.usernameForm.valid && this.auth.activeUsersId) {
      this.usernameFormError = '';
      this.auth.updateUsername(this.username.value)
        .then(() => {
          this.success = true;
        })
        .catch(error => {
          this.usernameFormError = 'Could not update the username.';
        })
    } else {
      console.log('Did not update username because either the formular is not valid or there is no active user at the moment.')
    }
  }

}
