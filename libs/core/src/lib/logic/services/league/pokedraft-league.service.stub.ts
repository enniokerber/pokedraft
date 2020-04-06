import {BehaviorSubject, of} from "rxjs";
import {MOCK_POKEDRAFT_LEAGUE_ARRAY} from "../../../models/league/IPokedraftLeague";
import {PokedraftLeagueService} from "./pokedraft-league.service";

export const PokedraftLeagueServiceStub = {
  loading: new BehaviorSubject<boolean>(false),
  getUsersLeagues: (uid: string) => of(MOCK_POKEDRAFT_LEAGUE_ARRAY),
  getActiveUsersLeagues: () => of(MOCK_POKEDRAFT_LEAGUE_ARRAY)
};

export const POKEDRAFT_LEAGUE_SERVICE_STUB_PROVIDER = {
  provide: PokedraftLeagueService,
  useValue: PokedraftLeagueServiceStub
};
