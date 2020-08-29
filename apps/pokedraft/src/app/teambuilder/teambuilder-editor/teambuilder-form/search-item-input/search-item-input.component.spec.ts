import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemInputComponent } from './search-item-input.component';

describe('SearchItemInputComponent', () => {
  let component: SearchItemInputComponent;
  let fixture: ComponentFixture<SearchItemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
