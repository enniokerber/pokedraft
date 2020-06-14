import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStatisticsComponent } from './type-statistics.component';

describe('TypeStatisticsComponent', () => {
  let component: TypeStatisticsComponent;
  let fixture: ComponentFixture<TypeStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
