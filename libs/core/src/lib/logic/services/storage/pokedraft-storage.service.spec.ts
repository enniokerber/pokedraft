import { TestBed } from '@angular/core/testing';

import { PokedraftStorageService } from './pokedraft-storage.service';
import {AngularFirestore} from "@angular/fire/firestore";
import {POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER} from "../auth/pokedraft-auth.service.stub";
import {AngularFireStorage} from "@angular/fire/storage";

describe('PokedraftStorageService', () => {
  let service: PokedraftStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER,
        {provide: AngularFirestore, useValue: {}},
        {provide: AngularFireStorage, useValue: {}}
      ]
    });
    service = TestBed.inject(PokedraftStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
