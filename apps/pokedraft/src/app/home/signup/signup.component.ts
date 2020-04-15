import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FirebaseError } from 'firebase';
import { FirebaseErrors, PokedraftAuthService } from '@pokedraft/core';
import { filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'pd-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  signUpError: string;
  signUpForm: FormGroup;

  loading$: Observable<boolean>;

  success: boolean;

  profileCreated: boolean;
  userSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private auth: PokedraftAuthService,
              private router: Router,
              private ngZone: NgZone) {}

  ngOnInit(): void {
    this.signUpError = '';
    this.signUpForm = this.fb.group({
      email: [`test${Date.now().toString()}@test.de`, [Validators.required, Validators.email]],
      password: ['abcdefgh', [Validators.required, Validators.minLength(8)]],
      repeatedPassword: ['abcdefgh', [Validators.required]]
    }, {
      validators: [this.matchPasswordValidator]
    });
    this.loading$ = this.auth.loading.asObservable();
    this.success = false;
    this.profileCreated = false;
    this.userSubscription = Subscription.EMPTY;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  get email(): AbstractControl { return this.signUpForm.get('email'); }
  get password(): AbstractControl { return this.signUpForm.get('password'); }
  get repeatedPassword(): AbstractControl { return this.signUpForm.get('repeatedPassword'); }

  private matchPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const repeatedPassword = control.get('repeatedPassword');
    return (password.value === repeatedPassword.value) ? null : { 'doesNotMatchPassword': true };
  };

  signUp(): void {
    if (this.signUpForm.valid) {
      this.signUpError = '';
      const email = this.email.value;
      const password = this.password.value;
      this.auth.emailSignUp(email, password)
        .then(() => {
          this.success = true;
          this.userSubscription = this.auth.user$.pipe(
            filter(user => !!user),
            take(1)
          ).subscribe(_ => {
            this.profileCreated = true;
            this.ngZone.run(() =>
              this.router.navigateByUrl(`home/pickusername`)
              .then(() => console.log('Signed up successfully, switched page so you can pick a username.'))
              .catch(error => console.log(error))
            )
          });
        })
        .catch((error: FirebaseError) => {
          console.error(error);
          switch (error.code) {
            case FirebaseErrors.INVALID_EMAIL: this.signUpError = 'Error: You provided an invalid value for "E-Mail".'; break;
            case FirebaseErrors.INVALID_PASSWORD: this.signUpError = 'Error: You provided an invalid value for "Password". Must be a string of at least 8 characters.'; break;
            case FirebaseErrors.EMAIL_ALREADY_EXISTS: this.signUpError = 'This E-Mail ist already in use.'; break;
            default: this.signUpError = 'An unknown error occurred. This might have have something to do with either your network connection or the database itself.';
          }
        });
    }
  }

}
