import { TestBed } from '@angular/core/testing';

import { PokedraftAuthService } from './pokedraft-auth.service';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {of} from "rxjs";

describe('PokedraftAuthService', () => {
  let service: PokedraftAuthService;

  const mockAngularFireAuth = {
    authState: of(null)
  };
  const mockAngularFirestore = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: mockAngularFirestore },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }
      ]
    });
    service = TestBed.inject(PokedraftAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
