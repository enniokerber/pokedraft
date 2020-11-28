import { Subject } from 'rxjs';
import { LogEntry, LogEntryPrefix } from './LogEntry';
import { scan, tap } from 'rxjs/operators';
import {LogChanges, LogEntryStream, PokedraftLogger} from './PokedraftLogger';

export class ReactiveLogger implements PokedraftLogger {

  private readonly logger: Subject<LogEntry>;

  fullLog$: LogChanges;

  log$: LogEntryStream;

  constructor() {
    this.logger = new Subject<LogEntry>();
    this.log$ = this.logger.asObservable();
    this.fullLog$ = this.log$
      .pipe(
        tap(entry => console.log(`[Pokédraft] ${entry.message}`)),
        scan((currentLog: LogEntry[], next: LogEntry) => {
          currentLog.push(next);
          return currentLog;
        }, [])
      );
  }

  private prefixMessage(prefix: string, message: string) {
    return `${prefix} ${message}`
  }

  info(message: string): void { this.logger.next(LogEntry.create(this.prefixMessage(LogEntryPrefix.INFO, message))); }

  request(message: string): void { this.logger.next(LogEntry.create(this.prefixMessage(LogEntryPrefix.REQUEST, message))); }

  ok(message: string): void { this.logger.next(LogEntry.success(this.prefixMessage(LogEntryPrefix.OK, message))); }

  error(message: string): void { this.logger.next(LogEntry.error(this.prefixMessage(LogEntryPrefix.ERROR, message))); }

  debug(message: string): void { this.logger.next(LogEntry.debug(this.prefixMessage(LogEntryPrefix.DEBUG, message))); }
}
