import {Injectable, OnDestroy} from '@angular/core';
import {
  HazardStatisticsCalculator,
  SubscriptionContainer,
  TeambuilderPokemon,
  TypeStatisticsCalculator
} from "../../models";
import {TeambuilderPokemonService} from "../pokemon/teambuilder-pokemon.service";

@Injectable()
export class TeambuilderStatisticsService implements OnDestroy {

  private team: TeambuilderPokemon[];

  public types: TypeStatisticsCalculator;

  public hazards: HazardStatisticsCalculator;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.types = new TypeStatisticsCalculator();
    this.hazards = new HazardStatisticsCalculator();
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.team.changes$.subscribe(team => {
        this.team = team;
        this.updateAllStatistics();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  getTeam(): TeambuilderPokemon[] {
    return this.team;
  }

  getTypeStatistics(): TypeStatisticsCalculator {
    return this.types;
  }

  getHazardStatistics(): HazardStatisticsCalculator {
    return this.hazards;
  }

  calculateTypeStatistics(): void {
    this.types.calculate(this.getTeam());
  }

  calculateHazardStatistics(): void {
    this.hazards.calculate(this.getTeam());
  }

  updateAllStatistics(): void {
    this.calculateTypeStatistics();
    this.calculateHazardStatistics();
  }

}
