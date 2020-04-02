import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeagueComponent } from './enter-league.component';

describe('EnterLeagueComponent', () => {
  let component: EnterLeagueComponent;
  let fixture: ComponentFixture<EnterLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
