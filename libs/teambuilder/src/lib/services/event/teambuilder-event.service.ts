import { Injectable } from '@angular/core';
import {TeambuilderListEvents} from "../../models/misc";

@Injectable()
export class TeambuilderEventService {

  private readonly _moveListEvents: TeambuilderListEvents;
  private readonly _itemListEvents: TeambuilderListEvents;
  private readonly _abilityListEvents: TeambuilderListEvents;

  constructor() {
    this._moveListEvents = new TeambuilderListEvents();
    this._itemListEvents = new TeambuilderListEvents();
    this._abilityListEvents = new TeambuilderListEvents();
  }

  get moveListEvents(): TeambuilderListEvents {
    return this._moveListEvents;
  }

  get itemListEvents(): TeambuilderListEvents {
    return this._itemListEvents;
  }

  get abilityListEvents(): TeambuilderListEvents {
    return this._abilityListEvents;
  }
}
