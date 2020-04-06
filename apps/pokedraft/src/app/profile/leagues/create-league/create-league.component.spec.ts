import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeagueComponent } from './create-league.component';
import {RouterTestingModule} from "@angular/router/testing";
import {PokedraftUIModule} from "@pokedraft/material";
import {ReactiveFormsModule} from "@angular/forms";
import {POKEDRAFT_LEAGUE_SERVICE_STUB_PROVIDER, POKEDRAFT_STORAGE_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {ChooseFileComponent} from "../../files/choose-file/choose-file.component";

describe('CreateLeagueComponent', () => {
  let component: CreateLeagueComponent;
  let fixture: ComponentFixture<CreateLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeagueComponent, ChooseFileComponent],
      imports: [RouterTestingModule, PokedraftUIModule, ReactiveFormsModule],
      providers: [
        POKEDRAFT_STORAGE_SERVICE_STUB_PROVIDER,
        POKEDRAFT_LEAGUE_SERVICE_STUB_PROVIDER
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
