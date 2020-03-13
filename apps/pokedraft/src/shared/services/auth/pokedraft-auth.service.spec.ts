import { TestBed } from '@angular/core/testing';

import { PokedraftAuthService } from './pokedraft-auth.service';

describe('PokedraftAuthService', () => {
  let service: PokedraftAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedraftAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
