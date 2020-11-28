import { Injectable } from '@angular/core';
import { LogChanges, PokedraftLogger, ReactiveLogger } from '@pokedraft/core';

@Injectable()
export class TeambuilderLoggingService {

  private readonly logger: PokedraftLogger;

  constructor() {
    this.logger = new ReactiveLogger();
  }

  getLogger(): PokedraftLogger { return this.logger; }

  getLoggingStream(): LogChanges { return this.logger.fullLog$; }

}
