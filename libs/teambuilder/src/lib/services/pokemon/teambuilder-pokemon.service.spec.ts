import { TestBed } from '@angular/core/testing';

import { TeambuilderPokemonService } from './teambuilder-pokemon.service';

describe('TeambuilderPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeambuilderPokemonService = TestBed.get(TeambuilderPokemonService);
    expect(service).toBeTruthy();
  });
});
