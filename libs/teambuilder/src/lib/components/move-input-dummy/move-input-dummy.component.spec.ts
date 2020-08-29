import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInputDummyComponent } from './move-input-dummy.component';

describe('MoveInputDummyComponent', () => {
  let component: MoveInputDummyComponent;
  let fixture: ComponentFixture<MoveInputDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveInputDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveInputDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
