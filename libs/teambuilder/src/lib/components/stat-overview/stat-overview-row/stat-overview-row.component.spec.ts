import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOverviewRowComponent } from './stat-overview-row.component';

describe('StatOverviewRowComponent', () => {
  let component: StatOverviewRowComponent;
  let fixture: ComponentFixture<StatOverviewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatOverviewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatOverviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
