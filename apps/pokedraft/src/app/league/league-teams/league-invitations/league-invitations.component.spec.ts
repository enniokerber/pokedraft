import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueInvitationsComponent } from './league-invitations.component';

describe('LeagueInvitationsComponent', () => {
  let component: LeagueInvitationsComponent;
  let fixture: ComponentFixture<LeagueInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
