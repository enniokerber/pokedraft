import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import {PokedraftButtonsModule, PokedraftUtilsModule} from "@pokedraft/material";
import {POKEDRAFT_USER_SERVICE_STUB_PROVIDER} from "@pokedraft/core";
import {MessageContainerComponent} from "./message-container/message-container.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent, MessageContainerComponent ],
      imports: [ PokedraftUtilsModule, PokedraftButtonsModule, RouterTestingModule ],
      providers: [ POKEDRAFT_USER_SERVICE_STUB_PROVIDER ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
