import { Injectable } from '@angular/core';
import {QuerySubject} from "../../models/misc";

@Injectable()
export class TeambuilderEventService {

  private readonly _searchMove: QuerySubject;
  private readonly _searchAbility: QuerySubject;
  private readonly _searchItem: QuerySubject;

  constructor() {
    this._searchMove = new QuerySubject();
    this._searchAbility = new QuerySubject();
    this._searchItem = new QuerySubject();
  }

  get searchMove(): QuerySubject {
    return this._searchMove;
  }

  get searchAbility(): QuerySubject {
    return this._searchAbility;
  }

  get searchItem(): QuerySubject {
    return this._searchItem;
  }
}
