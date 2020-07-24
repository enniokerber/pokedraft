import { IItem, TeambuilderPokemon, TeambuilderPokemonArray } from '@pokedraft/teambuilder';
import {
  ItemClauseStatistics, ItemClauseStatisticsMap,
  SingleItemCountItemSnippet, SingleItemCountPokemonSnippet,
  SingleItemCountStatistics
} from '../api/ItemClauseStatistics';

export class ItemClauseStatisticsCalculator {

  public statistics: ItemClauseStatistics;

  private itemClauseStatisticsMap: ItemClauseStatisticsMap;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.statistics = [];
    this.itemClauseStatisticsMap = {};
  }

  public calculate(forTeam: TeambuilderPokemonArray) {
    this.reset();
    forTeam
      .filter(pokemon => !!pokemon.getItem())
      .forEach(pokemon => this.addItem(pokemon));

  }

  private addItem(fromPokemon: TeambuilderPokemon) {
    const name = fromPokemon.getItem().name.english;

    if (this.itemClauseStatisticsMap[name]) {
      const statistics: SingleItemCountStatistics = this.itemClauseStatisticsMap[name];
      statistics.holders.push(this.createPokemonSnippet(fromPokemon));
      statistics.count++;
    } else {
      this.itemClauseStatisticsMap[name] = this.createSingleItemCountStatistics(fromPokemon);
    }

  }

  private createSingleItemCountStatistics(fromPokemon: TeambuilderPokemon): SingleItemCountStatistics {
    const item = fromPokemon.getItem();
    return ({
      ...this.createItemSnippet(item),
      count: 1,
      holders: [this.createPokemonSnippet(fromPokemon)]
    });
  }

  private createItemSnippet(fromItem: IItem): SingleItemCountItemSnippet {
    return ({
      name: fromItem.name,
      imgSrc: fromItem.imgSrc
    });
  }

  private createPokemonSnippet(fromPokemon: TeambuilderPokemon): SingleItemCountPokemonSnippet {
    return ({
      name: fromPokemon.getName(),
      imgSrc: fromPokemon.imgSrc
    });
  }
}
