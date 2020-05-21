import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  Language, Languages, SubscriptionContainer,
  TeambuilderDisplayMode,
  TeambuilderViewService
} from "@pokedraft/teambuilder";

@Component({
  selector: 'teambuilder-frame',
  templateUrl: './teambuilder-frame.component.html',
  styleUrls: ['./teambuilder-frame.component.scss']
})
export class TeambuilderFrameComponent implements OnInit, OnDestroy {

  public display: TeambuilderDisplayMode;

  public loadingProgress = 0;
  public loadingText = 'Load Data...';
  private datapiecesToLoad = 2;

  public preparingTeambuilder = false;

  private subscriptions: SubscriptionContainer;

  constructor(public tbViewService: TeambuilderViewService) {
    this.subscriptions = new SubscriptionContainer();
    this.subscriptions.add(
      this.tbViewService.displayMode.changes$.subscribe(display => {
        this.display = display;
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }
}
