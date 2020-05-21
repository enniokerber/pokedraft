import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderLoadingSpinnerComponent } from './teambuilder-loading-spinner.component';

describe('TeambuilderLoadingSpinnerComponent', () => {
  let component: TeambuilderLoadingSpinnerComponent;
  let fixture: ComponentFixture<TeambuilderLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
