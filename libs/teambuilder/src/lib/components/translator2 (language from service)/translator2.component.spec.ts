import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Translator2Component } from './translator2.component';

describe('Translator2Component', () => {
  let component: Translator2Component;
  let fixture: ComponentFixture<Translator2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Translator2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Translator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
