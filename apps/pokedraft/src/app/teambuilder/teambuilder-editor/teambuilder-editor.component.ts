import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  SubscriptionContainer, TeambuilderApiService,
  TeambuilderDisplayMode,
  TeambuilderViewService
} from '@pokedraft/teambuilder';

@Component({
  selector: 'pd-teambuilder-editor',
  templateUrl: './teambuilder-editor.component.html',
  styleUrls: ['./teambuilder-editor.component.scss']
})
export class TeambuilderEditorComponent implements OnDestroy {

  public display: TeambuilderDisplayMode;

  private subscriptions: SubscriptionContainer;

  @HostListener('document:keydown.control.s', [ '$event' ])
  save($event: KeyboardEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.tbApi.saveTeam();
  }

  constructor(private tbViewService: TeambuilderViewService,
              private tbApi: TeambuilderApiService) {
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbViewService.displayMode.changes$.subscribe(display => {
        this.display = display;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }

}
