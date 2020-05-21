import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdNumberChooserComponent } from './pd-number-chooser.component';

describe('PdNumberChooserComponent', () => {
  let component: PdNumberChooserComponent;
  let fixture: ComponentFixture<PdNumberChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdNumberChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdNumberChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
