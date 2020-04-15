import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {LayoutModule} from "../layout/layout.module";
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileNavbarComponent} from "./profile-navbar/profile-navbar.component";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "@pokedraft/core";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, ProfileNavbarComponent ],
      imports: [ LayoutModule, RouterTestingModule ],
      providers: [ POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
