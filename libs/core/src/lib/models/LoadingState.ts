import { BehaviorSubject, Observable } from 'rxjs';

export class LoadingState {

  private loading: BehaviorSubject<boolean>;
  loading$: Observable<boolean>;

  private error: BehaviorSubject<boolean>;
  error$: Observable<boolean>;

  private success: BehaviorSubject<boolean>;
  success$: Observable<boolean>;

  private showResult: BehaviorSubject<boolean>;
  showResult$: Observable<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loading.asObservable();

    this.error = new BehaviorSubject<boolean>(false);
    this.error$ = this.error.asObservable();

    this.success = new BehaviorSubject<boolean>(false);
    this.success$ = this.success.asObservable();

    this.showResult = new BehaviorSubject<boolean>(false);
    this.showResult$ = this.showResult.asObservable();
  }

  startLoading() { this.loading.next(true); }
  stopLoading() { this.loading.next(false); }

  hasError() {
    this.error.next(true);
    this.success.next(false);
  }

  wasSuccessful() {
    this.success.next(true);
    this.error.next(false);
  }

  show() {
    this.showResult.next(true);
    setTimeout(() => this.hide(), 2000);
  }
  hide() { this.showResult.next(false); }

  loadFromPromise<T>(loadingFn: () => Promise<T>): Promise<T> {
    this.startLoading();
    return loadingFn()
      .then(result => {
        this.wasSuccessful();
        return result;
      })
      .catch(result => {
        this.hasError();
        return result;
      })
      .finally(() => {
        this.stopLoading();
        this.show();
      });
  }
}
