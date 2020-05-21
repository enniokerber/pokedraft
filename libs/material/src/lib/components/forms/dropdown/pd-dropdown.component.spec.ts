import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdDropdownComponent } from './pd-dropdown.component';

describe('PdDropdownComponent', () => {
  let component: PdDropdownComponent;
  let fixture: ComponentFixture<PdDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
