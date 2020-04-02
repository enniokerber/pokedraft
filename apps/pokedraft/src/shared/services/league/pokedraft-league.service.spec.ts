import { TestBed } from '@angular/core/testing';

import { PokedraftLeagueService } from './pokedraft-league.service';

describe('PokedraftLeagueService', () => {
  let service: PokedraftLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedraftLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
