import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, finalize, map } from 'rxjs/operators';

/*
  Utility class for providing reactive loading capabilities.
  It´s used to show loading indicators.
 */

export class LoadingZone {

  private requestCount: BehaviorSubject<number>;

  public loading$: Observable<boolean>;

  constructor() {
    this.requestCount = new BehaviorSubject<number>(0);
    this.loading$ = this.requestCount.asObservable()
      .pipe(
        distinctUntilChanged(),
        map(count => count > 0)
      );
  }

  inc() { this.requestCount.next(this.requestCount.getValue() + 1); }

  dec() {
    const currVal = this.requestCount.getValue();
    this.requestCount.next(currVal <= 0 ? 0 : currVal - 1);
  }

  load<T>(obs: Observable<T>): Observable<T> {
    this.inc();
    return obs.pipe(
      finalize(() => this.dec())
    );
  }

}
