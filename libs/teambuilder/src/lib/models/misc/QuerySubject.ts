import {Observable, Subject} from "rxjs";
import {distinctUntilChanged, filter} from "rxjs/operators";

export class QuerySubject {

  private readonly _value: Subject<string>;
  private readonly _changes$: Observable<string>;

  private readonly _changesNotEmpty$: Observable<string>;
  private readonly _reset$: Observable<any>;

  constructor() {
    this._value = new Subject<string>();
    this._changes$ = this._value.asObservable().pipe(distinctUntilChanged());
    this._changesNotEmpty$ = this._changes$.pipe(filter(searchString => searchString !== ''));
    this._reset$ = this._changes$.pipe(filter(searchString => searchString === ''));
  }

  private get value(): Subject<string> {
    return this._value;
  }

  get changes$(): Observable<string> {
    return this._changes$;
  }

  get changesNotEmpty$(): Observable<string> {
    return this._changesNotEmpty$;
  }

  get reset$(): Observable<any> {
    return this._reset$;
  }

  update(value: string): void {
    this.value.next(value);
  }

  reset(): void {
    this.update('');
  }
}
