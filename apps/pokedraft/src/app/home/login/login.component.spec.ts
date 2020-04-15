import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {PokedraftUIModule} from "@pokedraft/material";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debug: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'profile/leagues',
            component: LoginComponent
          }
        ]),
        ReactiveFormsModule,
        PokedraftUIModule
      ],
      providers: [
        POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    router = debug.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should show success icon on login success', fakeAsync(() => {
    const routerSpy = spyOn(router, 'navigateByUrl');
    component.login();
    tick();
    fixture.detectChanges();
    expect(debug.query(By.css('.pd-success-icon'))).toBeTruthy();
    expect(routerSpy).toHaveBeenCalled();
  }));

  it('should disable button', () => {
    const button = debug.query(By.css('#pd-login-button button')).nativeElement;
    // no valid email + invalid password
    component.email.setValue('invalidemail');
    component.password.setValue('randompassword');
    fixture.detectChanges();
    expect(button.disabled).toBe(true, 'if email is invalid');
    // valid email + valid password
    component.email.setValue('valid@email.com');
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
    // valid email + no password
    component.password.setValue('');
    fixture.detectChanges();
    expect(button.disabled).toBe(true, 'if no password is provided');
  });
});
