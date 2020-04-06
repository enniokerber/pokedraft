import { TestBed } from '@angular/core/testing';

import { PokedraftUserService } from './pokedraft-user.service';
import {AngularFirestore} from "@angular/fire/firestore";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "../auth/pokedraft-auth.service.stub";

describe('PokedraftUserService', () => {
  let service: PokedraftUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER,
        {provide: AngularFirestore, useValue: {}}
      ]
    });
    service = TestBed.inject(PokedraftUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
