
export class Container<Entity = any> {

  data: Entity;

  constructor(public id?: number) {
    this.id = id;
    this.data = null;
  }

  getData(): Entity {
    return this.data;
  }

  setData(value: Entity) {
    this.data = value;
  }
}

export function generateContainer<T>(count: number): Container<T>[] {
  const container = [];
  for (let i = 0; i < count; i++) {
    container.push(new Container<T>(i));
  }
  return container;
}
