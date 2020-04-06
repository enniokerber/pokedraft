import {of} from "rxjs";
import {PokedraftStorageService} from "./pokedraft-storage.service";

export const PokedraftStorageServiceStub = {
  getActiveUsersFiles: () => of(['', 'example.png']),
};

export const POKEDRAFT_STORAGE_SERVICE_STUB_PROVIDER = {
  provide: PokedraftStorageService,
  useValue: PokedraftStorageServiceStub
};
