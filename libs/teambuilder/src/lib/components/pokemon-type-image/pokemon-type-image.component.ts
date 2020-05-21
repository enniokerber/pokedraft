import {Component, Input, OnDestroy} from '@angular/core';
import {Languages, PokemonType, PokemonTypes} from "../../models";
import {TeambuilderLanguageService, TeambuilderViewService} from "../../services";
import {Subscription} from "rxjs";

const TYPE_ICON_BASE_URL = 'assets/types/';

@Component({
  selector: 'pokemon-type-image',
  templateUrl: './pokemon-type-image.component.html',
  styleUrls: ['./pokemon-type-image.component.scss']
})
export class PokemonTypeImageComponent implements OnDestroy {

  @Input() type: PokemonType = PokemonTypes.Normal;

  iconUrl = TYPE_ICON_BASE_URL;

  private subscription: Subscription;

  constructor(private tbLanguage: TeambuilderLanguageService) {
    this.subscription = this.tbLanguage.language.changes$
      .subscribe(language => {
        switch (language) {
          case Languages.GERMAN: this.iconUrl = TYPE_ICON_BASE_URL + 'german/'; break;
          default: this.iconUrl = TYPE_ICON_BASE_URL;
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
