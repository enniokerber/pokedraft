import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  SubscriptionContainer, TeambuilderApiService,
  TeambuilderDisplayMode,
  TeambuilderViewService
} from '@pokedraft/teambuilder';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pd-teambuilder-editor',
  templateUrl: './teambuilder-editor.component.html',
  styleUrls: ['./teambuilder-editor.component.scss']
})
export class TeambuilderEditorComponent implements OnDestroy {

  public display$: Observable<TeambuilderDisplayMode>;

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
    this.display$ = this.tbViewService.displayMode.changes$.pipe(shareReplay());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribeAll();
  }

}
