import {QuerySubject} from "./QuerySubject";
import {Subject} from "rxjs";

export class TeambuilderListEvents {

  private readonly _search: QuerySubject;

  private readonly _selectMarked: Subject<void>;

  private readonly _up: Subject<void>;

  private readonly _down: Subject<void>;

  constructor() {
    this._search = new QuerySubject();
    this._selectMarked = new Subject<void>();
    this._up = new Subject<void>();
    this._down = new Subject<void>();
  }

  get search(): QuerySubject {
    return this._search;
  }

  get selectMarked(): Subject<void> {
    return this._selectMarked;
  }

  get up(): Subject<void> {
    return this._up;
  }

  get down(): Subject<void> {
    return this._down;
  }
}
