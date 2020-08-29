import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderEditorComponent } from './teambuilder-editor.component';

describe('TeambuilderEditorComponent', () => {
  let component: TeambuilderEditorComponent;
  let fixture: ComponentFixture<TeambuilderEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuilderEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuilderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
