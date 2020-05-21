import { TestBed } from '@angular/core/testing';

import { TeambuilderApiService } from './teambuilder-api.service';

describe('TeambuilderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeambuilderApiService = TestBed.get(TeambuilderApiService);
    expect(service).toBeTruthy();
  });
});
