import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderFormComponent } from './teambuilder-form.component';

describe('TeambuilderFormComponent', () => {
  let component: TeambuilderFormComponent;
  let fixture: ComponentFixture<TeambuilderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
