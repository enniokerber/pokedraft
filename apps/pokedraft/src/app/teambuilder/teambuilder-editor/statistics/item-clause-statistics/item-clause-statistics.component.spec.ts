import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClauseStatisticsComponent } from './item-clause-statistics.component';

describe('ItemClauseStatisticsComponent', () => {
  let component: ItemClauseStatisticsComponent;
  let fixture: ComponentFixture<ItemClauseStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemClauseStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClauseStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
