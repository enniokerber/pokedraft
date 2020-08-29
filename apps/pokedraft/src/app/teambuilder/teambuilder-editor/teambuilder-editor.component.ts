import { Component, OnDestroy } from '@angular/core';
import {
  SubscriptionContainer,
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

  constructor(public tbViewService: TeambuilderViewService) {
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
