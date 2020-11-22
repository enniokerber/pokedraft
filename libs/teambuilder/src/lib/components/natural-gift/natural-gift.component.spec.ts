import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalGiftComponent } from './natural-gift.component';

describe('NaturalGiftComponent', () => {
  let component: NaturalGiftComponent;
  let fixture: ComponentFixture<NaturalGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
