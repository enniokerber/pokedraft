import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLeaguesComponent } from './users-leagues.component';

describe('UsersLeaguesComponent', () => {
  let component: UsersLeaguesComponent;
  let fixture: ComponentFixture<UsersLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
