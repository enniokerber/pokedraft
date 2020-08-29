import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderTeamsComponent } from './teambuilder-teams.component';

describe('TeambuilderTeamsComponent', () => {
  let component: TeambuilderTeamsComponent;
  let fixture: ComponentFixture<TeambuilderTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
