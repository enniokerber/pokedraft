import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambarComponent } from './teambar.component';

describe('TeambarComponent', () => {
  let component: TeambarComponent;
  let fixture: ComponentFixture<TeambarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
