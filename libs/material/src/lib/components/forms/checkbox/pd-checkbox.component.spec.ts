import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdCheckboxComponent } from './pd-checkbox.component';

describe('PdCheckboxComponent', () => {
  let component: PdCheckboxComponent;
  let fixture: ComponentFixture<PdCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
