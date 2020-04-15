import {BehaviorSubject, of} from "rxjs";
import {MOCK_POKEDRAFT_USER} from "../../../models/user/IPokedraftUser";
import {PokedraftAuthService} from "./pokedraft-auth.service";

export const PokedraftAuthServiceStub = {
  auth$: of(MOCK_POKEDRAFT_USER),
  user$: of(MOCK_POKEDRAFT_USER),
  loading: new BehaviorSubject<boolean>(false),

  getActiveUsersId: () => 'someid',
  updateUsername: (username: string) => Promise.resolve(),
  login: () => Promise.resolve(),
  emailSignUp: (email, password) => Promise.resolve(),
  signOut: () => Promise.resolve()
};

export const POKEDRAFT_AUTH_SERVICE_STUB_PROVIDER = {
  provide: PokedraftAuthService,
  useValue: PokedraftAuthServiceStub
};
