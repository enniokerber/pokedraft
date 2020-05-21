import {Observable, Subject} from "rxjs";

export class QuerySubject {

  private readonly _value: Subject<string>;
  private readonly _changes$: Observable<string>;

  constructor() {
    this._value = new Subject<string>();
    this._changes$ = this._value.asObservable();
  }

  private get value(): Subject<string> {
    return this._value;
  }

  get changes$(): Observable<string> {
    return this._changes$;
  }

  update(value: string): void {
    this.value.next(value);
  }

  reset(): void {
    this.update('');
  }
}
