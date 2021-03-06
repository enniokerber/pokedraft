import {SortingDirection, SortingDirections} from "../types/SortingDirection";

export class TeambuilderEntityCollection<Entity = any> {

  public  all:      Entity[];
  public  filtered: Entity[];
  public  current:  Entity[];

  private sortingDirection: SortingDirection;
  private sortColumn: string;

  constructor(entities: Entity[], defaultSortColumn?: string) {
    this.all = entities;
    this.filtered = [...entities];
    this.current = [...entities];

    this.sortingDirection = SortingDirections.ASC;
    if (defaultSortColumn) {
      this.sort(defaultSortColumn, '', false);
    }
  }

  count(): number {
    return this.current.length;
  }

  isEmpty(): boolean { return this.getAll().length === 0; }

  getByIndex(index: number): Entity {
    if (this.count() === 0 || index > this.count() - 1) return null;
    return this.current[index];
  }

  getAll(): Entity[] { return this.all; }

  setEntities(entities: Entity[]) {
    this.all = entities;
    this.filtered = [...entities];
    this.current = [...entities];
  }

  private updateCurrent() {
    this.current = [ ...this.filtered ];
  }

  sort(by: string,
       parentProperty = '',
       toggleSortOrder = true) {

    if (this.filtered.length === 0) {
      return;
    }

    if (toggleSortOrder && this.sortColumn === by) {
      this.sortingDirection = this.sortingDirection === SortingDirections.ASC ? SortingDirections.DESC : SortingDirections.ASC;
      this.current = this.current.reverse();
      return;
    } else {
      this.sortColumn = by;
      this.sortingDirection = SortingDirections.ASC;
    }

    const first = parentProperty ? this.filtered[0][parentProperty][by] : this.filtered[0][by];
    const type = typeof first;

    switch (type) {
      case 'number' : {
        if (parentProperty) {
          this.current = this.filtered.sort((a, b) => b[parentProperty][by] - a[parentProperty][by]);
        } else {
          this.current = this.filtered.sort((a, b) => b[by] - a[by]);
        }
        break;
      }
      default: {
        if (parentProperty) {
          this.current = this.filtered.sort((a, b) => (a[parentProperty][by] || '').localeCompare(b[parentProperty][by] || ''));
        } else {
          this.current = this.filtered.sort((a, b) => a[by].localeCompare(b[by]));
        }
      }
    }
  }

  sortIfNotSorted(by: string,
                  parentProperty = '',
                  toggleSortOrder = true) {
    if (this.sortColumn !== by) {
      this.sort(by, parentProperty, toggleSortOrder);
    }
  }

  /* To make this work with translatable names, all names must be provided in every language. */
  filterByString(searchStr: string, propLevel1: string, propLevel2?: string) {

    if (searchStr === '') {
      this.filtered = [...this.all];
      this.updateCurrent();
      return;
    }

    const lowerCaseSearchString = searchStr.toLowerCase();

    let filterFn = (entity: Entity) => (entity[propLevel1] || '' as string).toLowerCase().includes(lowerCaseSearchString);

    if (propLevel2) {
      filterFn = (entity: Entity) => (entity[propLevel1][propLevel2] || '' as string).toLowerCase().includes(lowerCaseSearchString);
    }

    this.filtered = this.all.filter(filterFn);

    if (propLevel2) {
      return this.sort(propLevel2, propLevel1, false);
    } else {
      return this.sort(propLevel1, '', false);
    }
  }
}
