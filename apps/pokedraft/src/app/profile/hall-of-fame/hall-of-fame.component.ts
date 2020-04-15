import {Component, OnInit} from '@angular/core';
import {IPokedraftUserAchievements, PokedraftAuthService} from "@pokedraft/core";
import {Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'pd-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  achievements$: Observable<IPokedraftUserAchievements>;
  rank$: Observable<number>;

  constructor(private auth: PokedraftAuthService) {
    this.achievements$ = this.auth.user$.pipe(
      filter(user => !!user),
      map(user => user.achievements)
    );
    this.rank$ = of(1);
  }

  ngOnInit(): void {
  }

}
