import {MOCK_POKEDRAFT_MESSAGE_ARRAY} from "../../../models/user/IPokedraftMessage";
import { MOCK_POKEDRAFT_USER } from "../../../models/user/IPokedraftUser";
import {of} from "rxjs";
import {PokedraftUserService} from "./pokedraft-user.service";

export const PokedraftUserServiceStub = {
  user: MOCK_POKEDRAFT_USER,

  userIsSet: () => !!this.user,
  getMessages: (limit: number) => of(MOCK_POKEDRAFT_MESSAGE_ARRAY)
};

export const POKEDRAFT_USER_SERVICE_STUB_PROVIDER = {
  provide: PokedraftUserService,
  useValue: PokedraftUserServiceStub
};
