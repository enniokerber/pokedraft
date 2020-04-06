import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementListComponent } from './achievement-list.component';
import {MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT_ARRAY} from "@pokedraft/core";
import {AchievementComponent} from "./achievement/achievement.component";

describe('AchievementListComponent', () => {
  let component: AchievementListComponent;
  let fixture: ComponentFixture<AchievementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementListComponent, AchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementListComponent);
    component = fixture.componentInstance;
    component.achievements = MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT_ARRAY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
