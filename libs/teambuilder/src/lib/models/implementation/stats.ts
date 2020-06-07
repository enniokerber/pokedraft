import {HPStat, Stat} from './stat';
import {IStats} from '../api/IStats';
import {INatureWithoutStatMetadata} from '../api/INature';
import {MAX_DVS, MAX_EVS_TOTAL, statIdsArray} from "../../data";
import {Nature} from "./nature";
import {StatConfig, statConfigs} from "../api";


export class Stats {

    hp: Stat;
    atk: Stat;
    def: Stat;
    spatk: Stat;
    spdef: Stat;
    speed: Stat;

    public statConfig: StatConfig;

    public evSum: number;
    public evSumMaxed: boolean;

    public readonly MAX_EVS = MAX_EVS_TOTAL;

    private readonly nature: Nature;

    constructor(base: IStats, nature: Nature) {
           this.hp = new HPStat(base.hp, this);
          this.atk = new Stat(base.atk, this);
          this.def = new Stat(base.def, this);
        this.spatk = new Stat(base.spatk, this);
        this.spdef = new Stat(base.spdef, this);
        this.speed = new Stat(base.speed, this);
        this.statConfig = statConfigs[0];
        this.evSum = 0;
        this.evSumMaxed = false;
        this.nature = nature;
        this.applyNature();
    }

    getNature(): Nature {
      return this.nature;
    }

    getEvSum(): number {
      return this.evSum;
    }

    isEvSumMaxed(): boolean {
      return this.evSumMaxed;
    }

    getRemainingEVs(): number {
      return this.MAX_EVS - this.getEvSum();
    }

    getStatConfig(): StatConfig {
      return this.statConfig;
    }

    // apply a function to all stats based on the statIdsArray
    forAllStats(fn: (stat: Stat, statId?: string) => void): void {
      statIdsArray.forEach(statId => fn(this[statId] as Stat, statId))
    }

    forStat(statId: string, fn: (stat: Stat) => void) {
      if (!statIdsArray.includes(statId)) return console.log(`Stat [${statId}] does not exist. Function not executed.`);
      fn(this[statId] as Stat);
    }

    update(level: number = 100): void {
      this.forAllStats(stat => stat.update(level));
    }

    modify(): void {
      this.forAllStats(stat => stat.modify());
    }

    applyNature(nat?: INatureWithoutStatMetadata) {
      const nature = nat ? nat : this.getNature().getWithoutStatMetaData();
      this.neutralizeNatures();
      if (nature.increases && nature.decreases) {
        this.forStat(nature.increases, (stat) => stat.positiveNature());
        this.forStat(nature.decreases, (stat) => stat.negativeNature());
      }
    }

    neutralizeNatures(): void {
      this.forAllStats(stat => stat.neutralNature());
    }

    calculateEvSum() {
      this.evSum =
        this.hp.getEvs() + this.atk.getEvs() + this.def.getEvs() +
        this.spatk.getEvs() + this.spdef.getEvs() + this.speed.getEvs();
      this.evSumMaxed = this.evSum >= this.MAX_EVS;
    }

    applyStatConfig(config: StatConfig = this.statConfig): void {
      if (!config) return;
      this.forAllStats((stat: Stat, statId: string) => {
        if (config.evs) { stat.setEvs(config.evs[statId]) } else stat.setEvs(0);
        if (config.dvs) { stat.setDvs(config.dvs[statId]) } else stat.setDvs(MAX_DVS);
        stat.update();
      })
      this.calculateEvSum();
    }
}
