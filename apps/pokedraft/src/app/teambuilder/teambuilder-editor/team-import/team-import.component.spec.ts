import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamImportComponent } from './team-import.component';

describe('TeamImportComponent', () => {
  let component: TeamImportComponent;
  let fixture: ComponentFixture<TeamImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
