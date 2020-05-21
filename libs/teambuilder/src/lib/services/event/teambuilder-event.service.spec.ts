import { TestBed } from '@angular/core/testing';

import { TeambuilderEventService } from './teambuilder-event.service';

describe('TeambuilderEventService', () => {
  let service: TeambuilderEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeambuilderEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
