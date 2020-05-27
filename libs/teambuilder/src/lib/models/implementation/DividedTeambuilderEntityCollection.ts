import {TeambuilderEntityCollection} from "./TeambuilderEntityCollection";

export class DividedTeambuilderEntityCollection<Entity = any> extends TeambuilderEntityCollection {

  private readonly _dividerProp: string;

  // only contains references to TeambuilderEntityCollection.current, thus takes up just little memory space
  public firstHalf: Entity[];
  public secondHalf: Entity[];

  constructor(entities: Entity[], dividerProp: string, defaultSortColumn?: string) {
    super(entities, defaultSortColumn);
    this.firstHalf = [];
    this.secondHalf = [];
    this._dividerProp = dividerProp;
    this.divide();
  }

  get dividerProp(): string {
    return this._dividerProp;
  }

  sort(by: string,
       parentProperty = '',
       toggleSortOrder = true) {
    super.sort(by, parentProperty, toggleSortOrder);
    this.divide();
  }

  filterByString(searchStr: string, propLevel1: string, propLevel2?: string, parentSortColumn?: string) {
    super.filterByString(searchStr, propLevel1, propLevel2);
    this.divide();
  }

  divide() {
    this.firstHalf = this.current.filter(entity => !!entity[this.dividerProp]);
    this.secondHalf = this.current.filter(entity => !entity[this.dividerProp]);
  }
}
