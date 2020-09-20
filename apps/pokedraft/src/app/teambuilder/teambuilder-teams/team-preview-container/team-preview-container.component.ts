import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeambuilderTeamSnippet } from '@pokedraft/teambuilder';
import { interval, Observable } from 'rxjs';
import { map, startWith, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'pd-team-preview-container',
  templateUrl: './team-preview-container.component.html',
  styleUrls: ['./team-preview-container.component.scss']
})
export class TeamPreviewContainerComponent {

  @Input() team: ITeambuilderTeamSnippet;

  @Input() selected: boolean;

  @Output() edit: EventEmitter<string>;

  @Output() choose: EventEmitter<string>;

  @Output() delete: EventEmitter<string>;

  deleting: boolean;

  deletionCounter$: Observable<any>;

  constructor() {
    this.team = null;
    this.edit = new EventEmitter<string>();
    this.choose = new EventEmitter<string>();
    this.delete = new EventEmitter<string>();
    this.deleting = false;
  }

  selectTeam(): void {
    this.choose.emit(this.team.id);
  }

  editTeam(): void {
    this.edit.emit(this.team.id);
  }

  deleteTeam(): void {
    this.deleting = true;
    let secondsUntilDelete = 3;
    this.deletionCounter$ = interval(100)
      .pipe(
        startWith(secondsUntilDelete),
        takeWhile(_ => secondsUntilDelete > 0),
        tap(_ => secondsUntilDelete -= .1),
        map(_ => Math.abs(secondsUntilDelete).toFixed(1)),
        tap(_ => {
          if (secondsUntilDelete <= 0) {
            setTimeout(() => this.deleteFromDatabase(), 500);
          }
        })
      );
  }

  private deleteFromDatabase(): void {
    this.delete.emit(this.team.id);
  }

  stopDelete(): void {
    this.deleting = false;
    this.deletionCounter$ = null;
  }
}
