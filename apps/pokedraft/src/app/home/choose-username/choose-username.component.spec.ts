import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsernameComponent } from './choose-username.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {PokedraftUIModule} from "@pokedraft/material";
import {PokedraftAuthService, PokedraftAuthServiceStub} from "@pokedraft/core";

describe('ChooseUsernameComponent', () => {
  let component: ChooseUsernameComponent;
  let fixture: ComponentFixture<ChooseUsernameComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
