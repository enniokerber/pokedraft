import {IStats} from "./IStats";
import {ITranslatable} from "./ITranslatable";
import {MAX_EVS_PER_STAT, MAX_EVS_PER_STAT_MINUS_4} from "../../data";

export interface StatConfig {
  name: ITranslatable;
  evs?: Partial<IStats>;
  dvs?: Partial<IStats>;
}

export const statConfigs: StatConfig[] = [
  {
    name: {
      english: 'No Default Spread selected',
      german: 'Keine Standard Konfiguration'
    }
  },
  {
    name: {
      english: `Fast Physical Sweeper (ATK: ${MAX_EVS_PER_STAT}, DEF: 4, SPEED: ${MAX_EVS_PER_STAT})`,
      german: `Schneller Physischer Sweeper (ANG: ${MAX_EVS_PER_STAT}, VERT: 4, INIT: ${MAX_EVS_PER_STAT})`
    },
    evs: {
      atk: MAX_EVS_PER_STAT,
      def: 4,
      speed: MAX_EVS_PER_STAT
    },
  },
  {
    name: {
      english: `Fast Special Sweeper (SPATK: ${MAX_EVS_PER_STAT}, DEF: 4, SPEED: ${MAX_EVS_PER_STAT})`,
      german: `Schneller Spezieller Sweeper (SPANG: ${MAX_EVS_PER_STAT}, VERT: 4, INIT: ${MAX_EVS_PER_STAT})`
    },
    evs: {
      def: 4,
      spatk: MAX_EVS_PER_STAT,
      speed: MAX_EVS_PER_STAT
    },
  },
  {
    name: {
      english: `Bulky Attacker (HP: ${MAX_EVS_PER_STAT_MINUS_4}, ATK: ${MAX_EVS_PER_STAT}, DEF: 8)`,
      german: `Bulkiger Angreifer (KP: ${MAX_EVS_PER_STAT_MINUS_4}, ANG: ${MAX_EVS_PER_STAT}, VERT: 8)`
    },
    evs: {
      hp: MAX_EVS_PER_STAT_MINUS_4,
      atk: MAX_EVS_PER_STAT,
      def: 8
    }
  },
  {
    name: {
      english: `Bulky Special Attacker (HP: ${MAX_EVS_PER_STAT_MINUS_4}, SPATK: ${MAX_EVS_PER_STAT}, SPDEF: 8)`,
      german: `Bulkiger Spezieller Angreifer (KP: ${MAX_EVS_PER_STAT_MINUS_4}, SPANG: ${MAX_EVS_PER_STAT}, SPVERT: 8)`
    },
    evs: {
      hp: MAX_EVS_PER_STAT_MINUS_4,
      spatk: MAX_EVS_PER_STAT,
      spdef: 8
    }
  },
  {
    name: {
      english: `Physical Wall (HP: ${MAX_EVS_PER_STAT_MINUS_4}, DEF: ${MAX_EVS_PER_STAT}, SPDEF: 8)`,
      german: `Physische Wand (KP: ${MAX_EVS_PER_STAT_MINUS_4}, VERT: ${MAX_EVS_PER_STAT}, SPVERT: 8)`
    },
    evs: {
      hp: MAX_EVS_PER_STAT_MINUS_4,
      def: MAX_EVS_PER_STAT,
      spdef: 8
    }
  },
  {
    name: {
      english: `Special Wall (HP: ${MAX_EVS_PER_STAT_MINUS_4}, DEF: 8, SPDEF: ${MAX_EVS_PER_STAT})`,
      german: `Spezielle Wand (KP: ${MAX_EVS_PER_STAT_MINUS_4}, VERT: 8, SPVERT: ${MAX_EVS_PER_STAT})`
    },
    evs: {
      hp: MAX_EVS_PER_STAT_MINUS_4,
      def: 8,
      spdef: MAX_EVS_PER_STAT
    }
  }

];
