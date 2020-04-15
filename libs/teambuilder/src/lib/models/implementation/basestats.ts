
export class Basestats {
    constructor(public hp: number,
                public atk: number,
                public def: number,
                public spatk: number,
                public spdef: number,
                public speed: number) {
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spatk = spatk;
        this.spdef = spdef;
        this.speed = speed;
    }
}
