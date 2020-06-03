import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvInputComponent } from './ev-input.component';

describe('EvInputComponent', () => {
  let component: EvInputComponent;
  let fixture: ComponentFixture<EvInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
