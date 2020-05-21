import {IMove} from "../api/IMove";

export class MoveContainer {

  data: IMove;

  constructor(public id: number) {
    this.id = id;
    this.data = null;
  }

  getData(): IMove {
    return this.data;
  }

  setData(value: IMove) {
    this.data = value;
  }
}
