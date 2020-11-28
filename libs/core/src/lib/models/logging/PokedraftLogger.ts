import { Observable } from 'rxjs';
import { LogEntry } from './LogEntry';

export type LogChanges = Observable<LogEntry[]>;

export type LogEntryStream = Observable<LogEntry>;

export interface PokedraftLogger {

  log$: LogEntryStream;

  fullLog$: LogChanges;

  info(message: string): void;

  request(message: string): void;

  ok(message: string): void;

  error(message: string): void;

  debug(message: string): void;

}
