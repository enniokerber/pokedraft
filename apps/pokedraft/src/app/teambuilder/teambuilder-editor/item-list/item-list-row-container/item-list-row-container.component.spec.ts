import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListRowContainerComponent } from './item-list-row-container.component';

describe('ItemListRowContainerComponent', () => {
  let component: ItemListRowContainerComponent;
  let fixture: ComponentFixture<ItemListRowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListRowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListRowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
