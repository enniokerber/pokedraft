import {QuerySubject} from "./QuerySubject";
import {Subject} from "rxjs";

export class TeambuilderListEvents {

  public readonly search: QuerySubject;
  public readonly selectMarked: Subject<void>;
  public readonly up: Subject<void>;
  public readonly down: Subject<void>;

  constructor() {
    this.search = new QuerySubject();
    this.selectMarked = new Subject<void>();
    this.up = new Subject<void>();
    this.down = new Subject<void>();
  }
}
