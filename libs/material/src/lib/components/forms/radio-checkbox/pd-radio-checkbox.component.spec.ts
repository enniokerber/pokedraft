import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdRadioCheckboxComponent } from './pd-radio-checkbox.component';

describe('PdRadioCheckboxComponent', () => {
  let component: PdRadioCheckboxComponent;
  let fixture: ComponentFixture<PdRadioCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdRadioCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdRadioCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
