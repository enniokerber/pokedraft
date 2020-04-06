import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToolboxComponent } from './admin-toolbox.component';

describe('AdminToolboxComponent', () => {
  let component: AdminToolboxComponent;
  let fixture: ComponentFixture<AdminToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
