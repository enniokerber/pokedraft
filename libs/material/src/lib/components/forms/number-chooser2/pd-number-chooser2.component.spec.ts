import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdNumberChooser2Component } from './pd-number-chooser2.component';

describe('PdNumberChooser2Component', () => {
  let component: PdNumberChooser2Component;
  let fixture: ComponentFixture<PdNumberChooser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdNumberChooser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdNumberChooser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
