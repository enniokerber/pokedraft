import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavbarComponent } from './profile-navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "../../../../../../libs/core/src/lib/logic/services/auth/pokedraft-auth.service.stub";
import {SideNavbarComponent} from "../../layout/side-navbar/side-navbar.component";

describe('ProfileNavbarComponent', () => {
  let component: ProfileNavbarComponent;
  let fixture: ComponentFixture<ProfileNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNavbarComponent, ProfileNavbarComponent, SideNavbarComponent ],
      imports: [ RouterTestingModule ],
      providers: [ POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
