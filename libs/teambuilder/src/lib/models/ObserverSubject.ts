import {BehaviorSubject, Observable} from 'rxjs';

export class ObserverSubject<T> {

    private readonly _subject: BehaviorSubject<T>;
    private readonly _observer$: Observable<T>;

    constructor(initialValue: T) {
      this._subject = new BehaviorSubject<T>(initialValue);
      this._observer$ = this._subject.asObservable();
    }


  get subject(): BehaviorSubject<T> {
    return this._subject;
  }

  get observer$(): Observable<T> {
    return this._observer$;
  }

  getValue(): T {
      return this.subject.getValue();
  }

  update(newValue: T) {
      this.subject.next(newValue);
  }

}
