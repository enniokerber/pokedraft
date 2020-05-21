import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSnippetListComponent } from './league-snippet-list.component';

describe('LeagueSnippetListComponent', () => {
  let component: LeagueSnippetListComponent;
  let fixture: ComponentFixture<LeagueSnippetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueSnippetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSnippetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
