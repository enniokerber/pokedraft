import { TestBed } from '@angular/core/testing';

import { TeambuilderViewService } from './teambuilder-view.service';

describe('TeambuilderViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeambuilderViewService = TestBed.get(TeambuilderViewService);
    expect(service).toBeTruthy();
  });
});
