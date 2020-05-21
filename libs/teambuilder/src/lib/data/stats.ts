import {StatMetadata, StatWithLabel} from "../models/api/IStats";

export const stats = {
    HP: 'hp',
    ATK: 'atk',
    DEF: 'def',
    SPATK: 'spatk',
    SPDEF: 'spdef',
    SPEED: 'speed'
};

export interface ExtendedStatLabelMap {
  HP: StatMetadata,
  ATK: StatMetadata,
  DEF: StatMetadata,
  SPATK: StatMetadata,
  SPDEF: StatMetadata,
  SPEED: StatMetadata
}

export const statsExtended: ExtendedStatLabelMap = {
  HP: {
    statId: stats.HP,
    name: {
      english: 'Healthpoints',
      german: 'Kraftpunkte',
    },
    abbr: {
      english: 'Hp',
      german: 'Kp'
    }
  },
  ATK: {
    statId: stats.ATK,
    name: {
      english: 'Attack',
      german: 'Angriff',
    },
    abbr: {
      english: 'Atk',
      german: 'Ang'
    }
  },
  DEF: {
    statId: stats.DEF,
    name: {
      english: 'Defense',
      german: 'Verteidigung',
    },
    abbr: {
      english: 'Def',
      german: 'Vert'
    }
  },
  SPATK: {
    statId: stats.SPATK,
    name: {
      english: 'Special Attack',
      german: 'Spezial-Angriff',
    },
    abbr: {
      english: 'SpA',
      german: 'SpA'
    }
  },
  SPDEF: {
    statId: stats.SPDEF,
    name: {
      english: 'Special Defense',
      german: 'Spezial-Verteidigung',
    },
    abbr: {
      english: 'SpD',
      german: 'SpV'
    }
  },
  SPEED: {
    statId: stats.SPEED,
    name: {
      english: 'Speed',
      german: 'Initiative',
    },
    abbr: {
      english: 'Spe',
      german: 'Init'
    }
  },
};

export const natureStats: StatWithLabel[] = [
  {
    id: stats.ATK,
    label: 'Attack'
  },
  {
    id: stats.DEF,
    label: 'Defense'
  },
  {
    id: stats.SPATK,
    label: 'Special Attack'
  },
  {
    id: stats.SPDEF,
    label: 'Special Defense'
  },
  {
    id: stats.SPEED,
    label: 'Speed'
  }
];

export const natureStatsGerman: StatWithLabel[] = [
  {
    id: stats.ATK,
    label: 'Angriff'
  },
  {
    id: stats.DEF,
    label: 'Verteidigung'
  },
  {
    id: stats.SPATK,
    label: 'Spezial-Angriff'
  },
  {
    id: stats.SPDEF,
    label: 'Spezial-Verteidigung'
  },
  {
    id: stats.SPEED,
    label: 'Initiative'
  },
];

export const COMPARE_STAT_VALUE = 394; // this is max for a 130 base stat, which is considered as a good compare value
