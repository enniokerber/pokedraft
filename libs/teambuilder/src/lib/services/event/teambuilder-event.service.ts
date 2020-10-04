import { Injectable } from '@angular/core';
import {TeambuilderListEvents} from "../../models/misc";

@Injectable()
export class TeambuilderEventService {

  public readonly moveListEvents: TeambuilderListEvents;
  public readonly itemListEvents: TeambuilderListEvents;
  public readonly abilityListEvents: TeambuilderListEvents;
  public readonly pokemonListEvents: TeambuilderListEvents;

  constructor() {
    this.moveListEvents = new TeambuilderListEvents();
    this.itemListEvents = new TeambuilderListEvents();
    this.abilityListEvents = new TeambuilderListEvents();
    this.pokemonListEvents = new TeambuilderListEvents();
  }
}
