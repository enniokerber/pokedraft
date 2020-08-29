import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderSettingsBarComponent } from './teambuilder-settings-bar.component';

describe('TeambuilderSettingsBarComponent', () => {
  let component: TeambuilderSettingsBarComponent;
  let fixture: ComponentFixture<TeambuilderSettingsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderSettingsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderSettingsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
