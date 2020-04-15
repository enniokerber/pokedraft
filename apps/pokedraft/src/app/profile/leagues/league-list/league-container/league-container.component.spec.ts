import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueContainerComponent } from './league-container.component';
import {PokedraftUIModule} from "@pokedraft/material";
import {MOCK_POKEDRAFT_LEAGUE, PokedraftAuthService, PokedraftAuthServiceStub} from "@pokedraft/core";

describe('LeagueContainerComponent', () => {
  let component: LeagueContainerComponent;
  let fixture: ComponentFixture<LeagueContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueContainerComponent ],
      imports: [ PokedraftUIModule ],
      providers: [ { provide: PokedraftAuthService, useValue: PokedraftAuthServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueContainerComponent);
    component = fixture.componentInstance;
    component.currentLeague = MOCK_POKEDRAFT_LEAGUE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
