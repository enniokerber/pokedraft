import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderLoaderComponent } from './teambuilder-loader.component';

describe('TeambuilderLoaderComponent', () => {
  let component: TeambuilderLoaderComponent;
  let fixture: ComponentFixture<TeambuilderLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
