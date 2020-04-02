import { TestBed } from '@angular/core/testing';

import { PokedraftUserService } from './pokedraft-user.service';

describe('PokedraftUserService', () => {
  let service: PokedraftUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedraftUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
