import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrySignInComponent } from './try-sign-in.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileModule} from "../profile/profile.module";
import {LayoutModule} from "../layout/layout.module";
import {PokedraftUtilsModule} from "@pokedraft/material";

describe('TrySignInComponent', () => {
  let component: TrySignInComponent;
  let fixture: ComponentFixture<TrySignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrySignInComponent ],
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'profile',
          loadChildren: () => ProfileModule
        }]),
        LayoutModule,
        PokedraftUtilsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
