import { TestBed } from '@angular/core/testing';

import { TeambuilderLoggingService } from './teambuilder-logging.service';

describe('TeambuilderLoggingService', () => {
  let service: TeambuilderLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeambuilderLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
