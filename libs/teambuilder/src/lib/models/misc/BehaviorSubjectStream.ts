import {BehaviorSubject, Observable} from 'rxjs';

export class BehaviorSubjectStream<T> {

    private readonly _subject: BehaviorSubject<T>;
    private readonly _changes$: Observable<T>;

    constructor(initialValue: T) {
      this._subject = new BehaviorSubject<T>(initialValue);
      this._changes$ = this._subject.asObservable();
    }


  get subject(): BehaviorSubject<T> {
    return this._subject;
  }

  get changes$(): Observable<T> {
    return this._changes$;
  }

  getValue(): T {
      return this.subject.getValue();
  }

  update(newValue: T) {
      this.subject.next(newValue);
  }

}
