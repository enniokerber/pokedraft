import { TestBed } from '@angular/core/testing';

import { PokedraftLeagueService } from './pokedraft-league.service';
import {AngularFirestore} from "@angular/fire/firestore";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "../auth/pokedraft-auth.service.stub";

describe('PokedraftLeagueService', () => {
  let service: PokedraftLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER,
        { provide: AngularFirestore, useValue: {} }
      ]
    });
    service = TestBed.inject(PokedraftLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
