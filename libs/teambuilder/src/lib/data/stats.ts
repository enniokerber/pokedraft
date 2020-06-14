import {StatMetadata, StatWithLabel} from "../models/api";

export const statIds = {
    HP: 'hp',
    ATK: 'atk',
    DEF: 'def',
    SPATK: 'spatk',
    SPDEF: 'spdef',
    SPEED: 'speed'
};

export const statIdsArray = [
  statIds.HP,
  statIds.ATK,
  statIds.DEF,
  statIds.SPATK,
  statIds.SPDEF,
  statIds.SPEED
]

export interface ExtendedStatLabelMap {
  hp: StatMetadata,
  atk: StatMetadata,
  def: StatMetadata,
  spatk: StatMetadata,
  spdef: StatMetadata,
  speed: StatMetadata
}

export const statsExtended: ExtendedStatLabelMap = {
  hp: {
    statId: statIds.HP,
    name: {
      english: 'Healthpoints',
      german: 'Kraftpunkte',
    },
    abbr: {
      english: 'HP',
      german: 'KP'
    }
  },
  atk: {
    statId: statIds.ATK,
    name: {
      english: 'Attack',
      german: 'Angriff',
    },
    abbr: {
      english: 'Atk',
      german: 'Ang'
    }
  },
  def: {
    statId: statIds.DEF,
    name: {
      english: 'Defense',
      german: 'Verteidigung',
    },
    abbr: {
      english: 'Def',
      german: 'Vert'
    }
  },
  spatk: {
    statId: statIds.SPATK,
    name: {
      english: 'Special Attack',
      german: 'Spezial-Angriff',
    },
    abbr: {
      english: 'SpA',
      german: 'SpA'
    }
  },
  spdef: {
    statId: statIds.SPDEF,
    name: {
      english: 'Special Defense',
      german: 'Spezial-Verteidigung',
    },
    abbr: {
      english: 'SpD',
      german: 'SpV'
    }
  },
  speed: {
    statId: statIds.SPEED,
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
    id: statIds.ATK,
    label: statsExtended.atk.name
  },
  {
    id: statIds.DEF,
    label: statsExtended.def.name
  },
  {
    id: statIds.SPATK,
    label: statsExtended.spatk.name
  },
  {
    id: statIds.SPDEF,
    label: statsExtended.spdef.name
  },
  {
    id: statIds.SPEED,
    label: statsExtended.speed.name
  }
];

export const COMPARE_STAT_VALUE = 394; // this is max for a 130 base stat, which is considered as a good compare value
