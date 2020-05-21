import { TestBed } from '@angular/core/testing';

import { TeambuilderStoreService } from './teambuilder-store.service';

describe('TeambuilderStoreService', () => {
  let service: TeambuilderStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeambuilderStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
