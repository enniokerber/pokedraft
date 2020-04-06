import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {PokedraftUIModule} from "@pokedraft/material";

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, PokedraftUIModule ],
      providers: [ POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
