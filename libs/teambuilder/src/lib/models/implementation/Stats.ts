import {HPStat, Stat} from './Stat';
import { IStats, PartialStats } from '../api/IStats';
import {INatureWithoutStatMetadata} from '../api/INature';
import {getStatMetadata, MAX_DVS, MAX_EVS_TOTAL, statIdsArray} from "../../data";
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
        this.statConfig = statConfigs[0] || null;
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
      this.setEvsAndDvs(config.evs, config.dvs);
    }

    setEvsAndDvs(evs: PartialStats = {}, dvs: PartialStats = {}): void {
      this.forAllStats((stat: Stat, statId: string) => {
        stat.setEvs(typeof evs[statId] === 'number' ? evs[statId] : 0);
        stat.setDvs(typeof dvs[statId] === 'number' ? dvs[statId] : MAX_DVS);
        stat.update();
      });
      this.calculateEvSum();
    }

    updateEvsAndDvs(evs: PartialStats = {}, dvs: PartialStats = {}): void {
      this.forAllStats((stat: Stat, statId: string) => {
        if (typeof evs[statId] === 'number') stat.setEvs(evs[statId]);
        if (typeof dvs[statId] === 'number') stat.setDvs(dvs[statId]);
        stat.update();
      });
      this.calculateEvSum();
    }

    getEvsDatabaseRecord(): PartialStats {
      const evs = {};
      this.forAllStats((stat, statId) => {
        const statsEvs = stat.evs.getValue();
        if (statsEvs > 0) {
          evs[statId] = statsEvs;
        }
      });
      return evs as IStats;
    }

    getDvsDatabaseRecord(): PartialStats {
      const dvs = {};
      this.forAllStats((stat, statId) => {
        const statsDvs = stat.dvs.getValue();
        if (statsDvs < 31) {
          dvs[statId] = statsDvs;
        }
      });
      return dvs as IStats;
    }

    getEvString(): string {
      let evString = '';
      this.forAllStats((stat: Stat, statId: string) => {
        const evs = stat.getEvs();
        if (evs > 0) {
          evString = evString.concat(`${evs} ${getStatMetadata(statId).abbr.english} / `);
        }
      });
      return evString ? evString.substr(0, evString.length - 2) : evString;
    }

  getDvString(): string {
    let dvString = '';
    this.forAllStats((stat: Stat, statId: string) => {
      const dvs = stat.getDvs();
      if (dvs < MAX_DVS) {
        dvString = dvString.concat(`${dvs} ${getStatMetadata(statId).abbr.english} / `);
      }
    });
    return dvString ? dvString.substr(0, dvString.length - 2) : dvString;
  }
}
