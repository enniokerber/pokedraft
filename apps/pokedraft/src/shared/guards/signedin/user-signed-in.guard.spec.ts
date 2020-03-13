import { TestBed } from '@angular/core/testing';

import { UserSignedInGuard } from './user-signed-in.guard';

describe('UserSignedInGuard', () => {
  let guard: UserSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
