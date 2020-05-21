import {Stat} from './stat';
import {IStats} from '../api/IStats';
import {INatureWithoutStatMetadata} from '../api/INature';
import {stats} from "../../data";
import {Nature} from "./nature";


export class Stats {

    hp: Stat;
    atk: Stat;
    def: Stat;
    spatk: Stat;
    spdef: Stat;
    speed: Stat;

    private readonly _nature: Nature;

    constructor(base: IStats, nature: Nature) {
           this.hp = new Stat(base.hp);
          this.atk = new Stat(base.atk);
          this.def = new Stat(base.def);
        this.spatk = new Stat(base.spatk);
        this.spdef = new Stat(base.spdef);
        this.speed = new Stat(base.speed);
        this._nature = nature;
    }

    getNature(): Nature {
      return this._nature;
    }

    update(level: number = 100): void {
           this.hp.update(level);
          this.atk.update(level);
          this.def.update(level);
        this.spatk.update(level);
        this.spdef.update(level);
        this.speed.update(level);
    }

    modify(): void {
           this.hp.modify();
          this.atk.modify();
          this.def.modify();
        this.spatk.modify();
        this.spdef.modify();
        this.speed.modify();
    }

    applyNature(nat?: INatureWithoutStatMetadata) {
      const nature = nat ? nat : this.getNature().getWithoutStatMetaData();
      this.neutralizeNatures();
      if (nature.increases && nature.decreases) {
        switch (nature.increases) {
          case stats.HP: this.hp.positiveNature(); break;
          case stats.ATK: this.atk.positiveNature(); break;
          case stats.DEF: this.def.positiveNature(); break;
          case stats.SPATK: this.spatk.positiveNature(); break;
          case stats.SPDEF: this.spdef.positiveNature(); break;
          case stats.SPEED: this.speed.positiveNature(); break;
          default: console.log('nature.increases property does not fit');
        }

        switch (nature.decreases) {
          case stats.HP: this.hp.negativeNature(); break;
          case stats.ATK: this.atk.negativeNature(); break;
          case stats.DEF: this.def.negativeNature(); break;
          case stats.SPATK: this.spatk.negativeNature(); break;
          case stats.SPDEF: this.spdef.negativeNature(); break;
          case stats.SPEED: this.speed.negativeNature(); break;
          default: console.log('nature.decreases property does not fit');
        }
      }
    }

    neutralizeNatures(): void {
        this.hp.neutralNature();
        this.atk.neutralNature();
        this.def.neutralNature();
        this.spatk.neutralNature();
        this.spdef.neutralNature();
        this.speed.neutralNature();
    }

    highestStatValue(): number {
      return Math.max(
        this.hp.value,
        this.atk.value,
        this.def.value,
        this.spatk.value,
        this.spdef.value,
        this.speed.value
      );
    }
}
