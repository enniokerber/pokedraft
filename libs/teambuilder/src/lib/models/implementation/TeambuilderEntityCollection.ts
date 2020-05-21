import {SortingDirection, SortingDirections} from "../types/SortingDirection";

export class TeambuilderEntityCollection<Entity = any> {

  private _all:      Entity[];
  private _filtered: Entity[];
  private _current:  Entity[];

  private _sortingDirection: SortingDirection;
  private _sortColumn: string;

  constructor(entities: Entity[], defaultSortColumn?: string) {
    this._all = entities;
    this._filtered = [...entities];
    this._current = [...entities];

    this._sortingDirection = SortingDirections.ASC;
    if (defaultSortColumn) {
      this.sort(defaultSortColumn, '', false);
    }
  }


  get all(): Entity[] {
    return this._all;
  }

  set all(value: Entity[]) {
    this._all = value;
  }

  get filtered(): Entity[] {
    return this._filtered;
  }

  set filtered(value: Entity[]) {
    this._filtered = value;
  }

  get current(): Entity[] {
    return this._current;
  }

  set current(value: Entity[]) {
    this._current = value;
  }

  get sortingDirection(): SortingDirection {
    return this._sortingDirection;
  }

  set sortingDirection(value: SortingDirection) {
    this._sortingDirection = value;
  }

  get sortColumn(): string {
    return this._sortColumn;
  }

  set sortColumn(value: string) {
    this._sortColumn = value;
  }

  updateCurrent() {
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
      console.log(this.current);
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
          this.current = this.filtered.sort((a, b) => a[parentProperty][by].localeCompare(b[parentProperty][by]));
        } else {
          this.current = this.filtered.sort((a, b) => a[by].localeCompare(b[by]));
        }
      }
    }
    console.log('Sorted');
  }

  filterByString(searchStr: string, propLevel1: string, propLevel2?: string) {

    if (searchStr === '') {
      this.filtered = [...this.all];
      this.updateCurrent();
      return;
    }

    const lowerCaseSearchString = searchStr.toLowerCase();

    let filterFn = (entity: Entity) => (entity[propLevel1] as string).toLowerCase().includes(lowerCaseSearchString);

    if (propLevel2) {
      filterFn = (entity: Entity) => (entity[propLevel1][propLevel2] as string).toLowerCase().includes(lowerCaseSearchString);
    }

    this.filtered = this.all.filter(filterFn);
    this.sort(this.sortColumn, '', false);
  }
}
