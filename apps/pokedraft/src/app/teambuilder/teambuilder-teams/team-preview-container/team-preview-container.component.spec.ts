import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPreviewContainerComponent } from './team-preview-container.component';

describe('TeamPreviewContainerComponent', () => {
  let component: TeamPreviewContainerComponent;
  let fixture: ComponentFixture<TeamPreviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPreviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
