import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PokedraftAuthService } from '@pokedraft/core';
import {Router} from "@angular/router";
import {PokedraftConfig} from "../../../shared/pokedraft.config";
import {IPokedraftUser} from "@pokedraft/core";

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

  authorized$: Observable<IPokedraftUser>;

  config: any;

  constructor(private fb: FormBuilder,
              private auth: PokedraftAuthService,
              private router: Router) {
    this.usernameFormError = '';
    this.config = PokedraftConfig.editor.user;
    this.usernameForm = this.fb.group({
      username: ['Whatever', [Validators.required, Validators.minLength(this.config.USERNAME_MINLENGTH), Validators.maxLength(this.config.USERNAME_MAXLENGTH)]]
    });
    this.loading$ = this.auth.loading.asObservable();
    this.success = false;
    this.authorized$ = this.auth.user$;
  }

  ngOnInit(): void {
  }

  get username(): AbstractControl { return this.usernameForm.get('username'); }

  saveUsername(): void {
    if (this.usernameForm.valid) {
      this.usernameFormError = '';
      this.auth.updateUsername(this.username.value)
        .then(() => {
          this.success = true;
          this.router.navigateByUrl('profile');
        })
        .catch(error => {
          this.usernameFormError = 'Could not update the username.';
        })
    } else {
      console.log('Did not update username because either the formular is not valid or there is no active user at the moment.')
    }
  }

}
