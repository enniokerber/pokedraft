import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Translator3Component } from './translator3.component';

describe('Translator3Component', () => {
  let component: Translator3Component;
  let fixture: ComponentFixture<Translator3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Translator3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Translator3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
