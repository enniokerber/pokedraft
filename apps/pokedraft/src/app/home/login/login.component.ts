import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedraftAuthService } from '../../../shared/services/auth/pokedraft-auth.service';
import { FirebaseErrors } from '../../../shared/data/firebase/firebase.errors';
import { FirebaseError } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'pd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: string;
  loginForm: FormGroup;

  loading$: Observable<boolean>;

  success: boolean;

  constructor(private fb: FormBuilder,
              private auth: PokedraftAuthService) {
    this.loginError = '';
    this.loginForm = this.fb.group({
      email: ['njo.dev@web.de', [Validators.required, Validators.email]],
      password: ['abcdefgh', [Validators.required]]
    });
    this.loading$ = this.auth.loading.asObservable();
    this.success = false;
  }

  ngOnInit(): void {
  }

  get email(): AbstractControl { return this.loginForm.get('email'); }
  get password(): AbstractControl { return this.loginForm.get('password'); }

  login() {
    if (this.loginForm.valid) {
      this.loginError = '';
      const email = this.email.value;
      const password  = this.password.value;
      this.auth.login(email, password)
        .then(value => {
          console.log(value);
          this.success = true;
        })
        .catch((error: FirebaseError) => {
          switch (error.code) {
            case FirebaseErrors.USER_NOT_FOUND: this.loginError = 'E-Mail not found'; break;
            case FirebaseErrors.WRONG_PASSWORD: this.loginError = 'Wrong password'; break;
            case FirebaseErrors.TOO_MANY_REQUESTS: this.loginError = 'Too many unsuccessful login attemps. Please try again later.'; break;
            default: this.loginError = 'An unknown error occurred. This might have have something to do with either your network connection or the database itself.';
          }
          console.error(error);
        });
    }
  }
}
