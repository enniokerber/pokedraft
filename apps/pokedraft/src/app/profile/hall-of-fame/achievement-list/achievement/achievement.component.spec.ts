import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementComponent } from './achievement.component';
import {MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT} from "@pokedraft/core";

describe('AchievementComponent', () => {
  let component: AchievementComponent;
  let fixture: ComponentFixture<AchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementComponent);
    component = fixture.componentInstance;
    component.achievement = MOCK_POKEDRAFT_LEAGUE_ACHIEVEMENT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
