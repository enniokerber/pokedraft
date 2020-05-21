import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCategoryImageComponent } from './move-category-image.component';

describe('MoveCategoryImageComponent', () => {
  let component: MoveCategoryImageComponent;
  let fixture: ComponentFixture<MoveCategoryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveCategoryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveCategoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
