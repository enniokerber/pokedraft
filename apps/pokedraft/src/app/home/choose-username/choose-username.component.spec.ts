import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ChooseUsernameComponent } from './choose-username.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {PokedraftUIModule} from "@pokedraft/material";
import {PokedraftAuthService, PokedraftAuthServiceStub} from "@pokedraft/core";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Router} from "@angular/router";

describe('ChooseUsernameComponent', () => {
  let component: ChooseUsernameComponent;
  let fixture: ComponentFixture<ChooseUsernameComponent>;
  let debug: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUsernameComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, PokedraftUIModule ],
      providers: [
        {provide: PokedraftAuthService, useValue: PokedraftAuthServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUsernameComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    router = debug.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show input errors', () => {
    const errorMessageQuery = By.css('pd-error');
    expect(debug.query(errorMessageQuery)).toBeFalsy();
    component.username.setValue('A');
    component.username.markAllAsTouched();
    component.username.markAsDirty();
    fixture.detectChanges();
    expect(debug.query(errorMessageQuery)).toBeTruthy('on minlength error');
    component.username.setValue('123456789012345');
    fixture.detectChanges();
    expect(debug.query(errorMessageQuery)).toBeTruthy('on maxlength error');
  });

  it('should show success icon on update username success', fakeAsync(() => {
    const routerSpy = spyOn(router, 'navigateByUrl').and.callFake(() => Promise.resolve(true));
    const successIconQuery = By.css('.pd-success-icon');
    expect(debug.query(successIconQuery)).toBeFalsy();
    component.saveUsername();
    tick();
    fixture.detectChanges();
    expect(debug.query(successIconQuery)).toBeTruthy();
    expect(routerSpy).toHaveBeenCalled();
  }));
});
