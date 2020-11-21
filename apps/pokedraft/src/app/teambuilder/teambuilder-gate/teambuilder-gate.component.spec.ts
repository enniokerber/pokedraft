import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderGateComponent } from './teambuilder-gate.component';

describe('TeambuilderGateComponent', () => {
  let component: TeambuilderGateComponent;
  let fixture: ComponentFixture<TeambuilderGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
