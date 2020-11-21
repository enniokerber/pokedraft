import { Observable } from 'rxjs';
import { LogEntry } from './LogEntry';

export type LoggingStream = Observable<LogEntry[]>;

export interface PokedraftLogger {

  log$: LoggingStream;

  info(message: string): void;

  request(message: string): void;

  ok(message: string): void;

  error(message: string): void;

  debug(message: string): void;

}
