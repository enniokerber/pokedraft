import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeambuilderTeamSnippet } from '@pokedraft/teambuilder';

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

  constructor() {
    this.team = null;
    this.edit = new EventEmitter<string>();
    this.choose = new EventEmitter<string>();
  }

  selectTeam(): void {
    this.choose.emit(this.team.id);
  }

  editTeam(): void {
    this.edit.emit(this.team.id);
  }

}
