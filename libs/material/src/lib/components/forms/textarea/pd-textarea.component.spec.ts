import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTextareaComponent } from './pd-textarea.component';

describe('TextareaComponent', () => {
  let component: PdTextareaComponent;
  let fixture: ComponentFixture<PdTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
