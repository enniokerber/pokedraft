import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeambuilderLoggingService } from '@pokedraft/teambuilder';
import { LoggingStream } from '@pokedraft/core';

@Component({
  selector: 'pd-teambuilder-gate',
  templateUrl: './teambuilder-gate.component.html',
  styleUrls: ['./teambuilder-gate.component.scss']
})
export class TeambuilderGateComponent implements OnInit {

  openingEditor: boolean;

  log$: LoggingStream;

  constructor(private router: Router,
              tbLogger: TeambuilderLoggingService) {
    this.openingEditor = false;
    this.log$ = tbLogger.getLoggingStream();
  }

  ngOnInit(): void {
    this.openingEditor = true;
    this.router.navigateByUrl('teambuilder/editor').finally(() => this.openingEditor = false);
  }

}
