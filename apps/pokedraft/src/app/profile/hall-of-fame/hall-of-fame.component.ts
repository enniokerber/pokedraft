import {Component, OnInit} from '@angular/core';
import {IPokedraftUserAchievements} from "@pokedraft-fire/models";
import {Observable, of} from "rxjs";
import {PokedraftAuthService} from "../../../shared/services/auth/pokedraft-auth.service";
import {map} from "rxjs/operators";

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
      map(user => user.achievements)
    );
    this.rank$ = of(1);
  }

  ngOnInit(): void {
  }

}
