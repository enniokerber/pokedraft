import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrySignInComponent } from './try-sign-in.component';

describe('TrySignInComponent', () => {
  let component: TrySignInComponent;
  let fixture: ComponentFixture<TrySignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrySignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
