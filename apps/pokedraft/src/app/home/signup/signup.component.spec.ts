import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {PokedraftUIModule} from "@pokedraft/material";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Router} from "@angular/router";

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let debug: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'home/pickusername',
            component: SignupComponent
          }
        ]),
        ReactiveFormsModule,
        PokedraftUIModule
      ],
      providers: [POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    router = debug.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button on wrong input', () => {
    const buttonDebugElement = debug.query(By.css('#pd-signup-button button'));
    expect(buttonDebugElement).toBeTruthy();
    const button = buttonDebugElement.nativeElement;
    // everything valid
    component.email.setValue('valid@email.com');
    component.password.setValue('randompassword');
    component.repeatedPassword.setValue('randompassword');
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
    // invalid email
    component.email.setValue('invalidemail');
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
    // wrong repeated password
    component.email.setValue('valid@email.com');
    component.password.setValue('randompassword');
    component.repeatedPassword.setValue('anotherrandompassword');
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  });

  it('should show success icon after successful signup', fakeAsync(() => {
    const routerSpy = spyOn(router, 'navigateByUrl').and.callFake(() => Promise.resolve(true));
    const successIconQuery = By.css('.pd-success-icon');
    expect(debug.query(successIconQuery)).toBeFalsy();
    component.signUp();
    tick();
    fixture.detectChanges();
    expect(debug.query(successIconQuery)).toBeTruthy();
    expect(routerSpy).toHaveBeenCalled();
  }));

});
