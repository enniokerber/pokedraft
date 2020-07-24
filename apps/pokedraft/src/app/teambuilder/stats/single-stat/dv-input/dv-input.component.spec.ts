import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvInputComponent } from './dv-input.component';

describe('DvInputComponent', () => {
  let component: DvInputComponent;
  let fixture: ComponentFixture<DvInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
