import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSnippetContainerComponent } from './league-snippet-container.component';

describe('LeagueSnippetContainerComponent', () => {
  let component: LeagueSnippetContainerComponent;
  let fixture: ComponentFixture<LeagueSnippetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueSnippetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSnippetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
