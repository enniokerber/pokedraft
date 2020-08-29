import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesListRowContainerComponent } from './moves-list-row-container.component';

describe('MovesListRowContainerComponent', () => {
  let component: MovesListRowContainerComponent;
  let fixture: ComponentFixture<MovesListRowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesListRowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesListRowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
