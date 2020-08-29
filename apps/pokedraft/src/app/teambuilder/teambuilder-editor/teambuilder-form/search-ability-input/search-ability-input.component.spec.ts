import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAbilityInputComponent } from './search-ability-input.component';

describe('SearchAbilityInputComponent', () => {
  let component: SearchAbilityInputComponent;
  let fixture: ComponentFixture<SearchAbilityInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAbilityInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAbilityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
