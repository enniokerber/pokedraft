import { TestBed } from '@angular/core/testing';

import { TeambuilderLanguageService } from './teambuilder-language.service';

describe('LanguageService', () => {
  let service: TeambuilderLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeambuilderLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
