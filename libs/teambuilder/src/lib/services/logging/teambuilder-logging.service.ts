import { Injectable } from '@angular/core';
import { LoggingStream, PokedraftLogger, ReactiveLogger } from '@pokedraft/core';

@Injectable()
export class TeambuilderLoggingService {

  private readonly logger: PokedraftLogger;

  constructor() {
    this.logger = new ReactiveLogger();
  }

  getLogger(): PokedraftLogger { return this.logger; }

  getLoggingStream(): LoggingStream { return this.logger.log$; }

}
