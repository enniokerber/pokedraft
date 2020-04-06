import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLeaguesComponent } from './users-leagues.component';
import {PokedraftUIModule} from "@pokedraft/material";
import {LeagueContainerComponent} from "../league-list/league-container/league-container.component";
import {PokedraftLeagueService, PokedraftLeagueServiceStub, PokedraftAuthServiceStub, PokedraftAuthService} from "@pokedraft/core";
import {LeagueListComponent} from "../league-list/league-list.component";

describe('UsersLeaguesComponent', () => {
  let component: UsersLeaguesComponent;
  let fixture: ComponentFixture<UsersLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueContainerComponent, LeagueListComponent, UsersLeaguesComponent ],
      imports: [ PokedraftUIModule ],
      providers: [
        {provide: PokedraftLeagueService, useValue: PokedraftLeagueServiceStub},
        {provide: PokedraftAuthService, useValue: PokedraftAuthServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
