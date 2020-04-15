import {Basestats} from './basestats';


export class PokemonBase {

    constructor(public nr: number,
                public name: string,
                public types: string[],
                public base: Basestats) {
        this.nr = nr;
        this.name = name;
        this.types = types;
        this.base = base;
    }
}
