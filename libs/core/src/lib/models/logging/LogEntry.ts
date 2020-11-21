
export enum LogEntryType {
  NORMAL,
  ERROR,
  DEBUG,
  SUCCESS
}

export const LogEntryPrefix = {
  INFO: '[INFO]',
  ERROR: '[ERROR]',
  DEBUG: '[DEBUG]',
  REQUEST: '[REQUEST]',
  OK: '[OK]'
};

export class LogEntry {

  type: LogEntryType;

  message: string;

  private constructor(message: string, type: LogEntryType) {
    return ({ type, message });
  }

  static create(message: string): LogEntry {
    return new LogEntry(message, LogEntryType.NORMAL);
  }

  static error(message: string): LogEntry {
    return new LogEntry(message, LogEntryType.ERROR);
  }

  static debug(message: string): LogEntry {
    return new LogEntry(message, LogEntryType.DEBUG);
  }

  static success(message: string): LogEntry {
    return new LogEntry(message, LogEntryType.SUCCESS);
  }
}
