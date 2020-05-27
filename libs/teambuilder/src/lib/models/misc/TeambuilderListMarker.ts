import {DividedTeambuilderEntityCollection, TeambuilderEntityCollection} from "@pokedraft/teambuilder";

export class TeambuilderListMarker<EntityType> {

  public index: number;

  protected readonly _entityCollection: TeambuilderEntityCollection<EntityType>;

  constructor(entityCollection: TeambuilderEntityCollection<EntityType>) {
    this.index = 0;
    this._entityCollection = entityCollection;
  }

  getIndex(): number {
    return this.index;
  }

  get entityCollection(): TeambuilderEntityCollection<EntityType> {
    return this._entityCollection;
  }

  getMarkedEntity(): EntityType {
    return this.entityCollection.getByIndex(this.getIndex());
  }

  inc() {
    const max = this.entityCollection.count() - 1;
    if (this.getIndex() < max) {
      this.index++;
    }
  }

  dec() {
    if (this.getIndex() > 0) {
      this.index--;
    }
  }
}

export class TeambuilderListMarkerForDividedEntityCollection<EntityType = any> extends TeambuilderListMarker<EntityType> {

  protected readonly _entityCollection: DividedTeambuilderEntityCollection;

  public markerForSecondHalf: number;

  constructor(entityCollection: DividedTeambuilderEntityCollection) {
    super(entityCollection);
    this.updateMarkerForSecondHalf();
  }

  get entityCollection(): DividedTeambuilderEntityCollection<EntityType> {
    return this._entityCollection;
  }

  getMarkedEntity(): EntityType {
    if (this.getIndex() < this.entityCollection.firstHalf.length) {
      return this.entityCollection.firstHalf[this.index];
    } else {
      return this.entityCollection.secondHalf[this.markerForSecondHalf];
    }
  }

  setMarkerForSecondHalf(value: number) {
    this.markerForSecondHalf = value;
  }

  inc() {
    super.inc();
    this.updateMarkerForSecondHalf();
  }

  dec() {
    super.dec();
    this.updateMarkerForSecondHalf();
  }

  updateMarkerForSecondHalf() {
    this.setMarkerForSecondHalf(this.index - this.entityCollection.firstHalf.length);
  }

}

