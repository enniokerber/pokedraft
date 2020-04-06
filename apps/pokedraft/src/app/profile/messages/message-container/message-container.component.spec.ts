import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainerComponent } from './message-container.component';
import {MOCK_POKEDRAFT_MESSAGE_LEAGUE, MOCK_POKEDRAFT_MESSAGE_REWARD} from "@pokedraft/core";
import {PokedraftButtonsModule, PokedraftUtilsModule} from "@pokedraft/material";
import {RouterTestingModule} from "@angular/router/testing";

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  let fixture: ComponentFixture<MessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContainerComponent ],
      imports: [ PokedraftUtilsModule, PokedraftButtonsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create with league invitation', () => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    component.message = MOCK_POKEDRAFT_MESSAGE_LEAGUE;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with reward message', () => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    component.message = MOCK_POKEDRAFT_MESSAGE_REWARD;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
