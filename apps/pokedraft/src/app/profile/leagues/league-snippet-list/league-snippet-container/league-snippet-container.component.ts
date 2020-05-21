import {Component, Input, OnInit} from '@angular/core';
import {IPokedraftLeagueSnippet} from "@pokedraft/core";
import {Router} from "@angular/router";

@Component({
  selector: 'pd-league-snippet-container',
  templateUrl: './league-snippet-container.component.html',
  styleUrls: ['./league-snippet-container.component.scss']
})
export class LeagueSnippetContainerComponent implements OnInit {

  @Input() league: IPokedraftLeagueSnippet;

  constructor(private router: Router) {
    this.league = null;
  }

  ngOnInit(): void {
  }

  openLeague(id: string): void {
    this.router.navigateByUrl(`league/${id}`);
  }
}
