import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormContainerComponent } from './team-form-container.component';

describe('TeamFormContainerComponent', () => {
  let component: TeamFormContainerComponent;
  let fixture: ComponentFixture<TeamFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
