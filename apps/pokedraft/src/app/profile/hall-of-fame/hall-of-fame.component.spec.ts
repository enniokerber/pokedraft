import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfFameComponent } from './hall-of-fame.component';
import {PokedraftAuthService, PokedraftAuthServiceStub} from "@pokedraft/core";
import {AchievementListComponent} from "./achievement-list/achievement-list.component";
import {AchievementComponent} from "./achievement-list/achievement/achievement.component";

describe('HallOfFameComponent', () => {
    let component: HallOfFameComponent;
    let fixture: ComponentFixture<HallOfFameComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ HallOfFameComponent, AchievementListComponent, AchievementComponent ],
        imports: [ ],
        providers: [
          {provide: PokedraftAuthService, useValue: PokedraftAuthServiceStub}
        ]
      })
        .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
