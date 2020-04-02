import { TestBed } from '@angular/core/testing';

import { PokedraftStorageService } from './pokedraft-storage.service';

describe('PokedraftStorageService', () => {
  let service: PokedraftStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedraftStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
