import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardStatisticsComponent } from './hazard-statistics.component';

describe('HazardStatisticsComponent', () => {
  let component: HazardStatisticsComponent;
  let fixture: ComponentFixture<HazardStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
