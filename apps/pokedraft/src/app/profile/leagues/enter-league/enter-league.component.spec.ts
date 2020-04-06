import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeagueComponent } from './enter-league.component';
import {RouterTestingModule} from "@angular/router/testing";
import {PokedraftUIModule} from "@pokedraft/material";
import {
  POKEDRAFT_LEAGUE_SERVICE_STUB_PROVIDER
} from "@pokedraft/core";

describe('EnterLeagueComponent', () => {
  let component: EnterLeagueComponent;
  let fixture: ComponentFixture<EnterLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLeagueComponent ],
      imports: [ RouterTestingModule, PokedraftUIModule ],
      providers: [ POKEDRAFT_LEAGUE_SERVICE_STUB_PROVIDER ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
