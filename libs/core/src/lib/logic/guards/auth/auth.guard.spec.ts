import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {PokedraftAuthService} from "../../services/auth/pokedraft-auth.service";
import {PokedraftAuthServiceStub} from "../../services/auth/pokedraft-auth.service.stub";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const mockAuthService = PokedraftAuthServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        {provide: PokedraftAuthService, useValue: mockAuthService}
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
