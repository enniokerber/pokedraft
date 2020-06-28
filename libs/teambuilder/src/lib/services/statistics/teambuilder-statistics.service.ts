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

  public autoUpdate: boolean;

  private team: TeambuilderPokemon[];

  public types: TypeStatisticsCalculator;

  public hazards: HazardStatisticsCalculator;

  private subscriptions: SubscriptionContainer;

  constructor(private tbPokemon: TeambuilderPokemonService) {
    this.autoUpdate = true;
    this.types = new TypeStatisticsCalculator();
    this.hazards = new HazardStatisticsCalculator();
    this.subscriptions = new SubscriptionContainer(
      this.tbPokemon.team.changes$.subscribe(team => {
        if (!this.autoUpdatesEnabled()) return;
        this.team = team;
        this.updateAllStatistics();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribeAll();
  }

  autoUpdatesEnabled(): boolean { return this.autoUpdate; }

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
