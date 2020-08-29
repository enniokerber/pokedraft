import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInputComponent } from './move-input.component';

describe('MoveInputComponent', () => {
  let component: MoveInputComponent;
  let fixture: ComponentFixture<MoveInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
