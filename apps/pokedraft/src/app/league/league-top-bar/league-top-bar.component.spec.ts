import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTopBarComponent } from './league-top-bar.component';

describe('LeagueTopBarComponent', () => {
  let component: LeagueTopBarComponent;
  let fixture: ComponentFixture<LeagueTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
