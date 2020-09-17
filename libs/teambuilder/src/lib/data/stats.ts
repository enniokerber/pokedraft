import {ExtendedStatLabelMap, StatMetadata, StatWithLabel} from "../models/api";

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

export const statsExtended: ExtendedStatLabelMap = {
  [statIds.HP]: {
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
  [statIds.ATK]: {
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
  [statIds.DEF]: {
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
  [statIds.SPATK]: {
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
  [statIds.SPDEF]: {
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
  [statIds.SPEED]: {
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
} as unknown as ExtendedStatLabelMap;

export function getStatMetadata(statId: string): StatMetadata {
  if (!statIdsArray.includes(statId)) return null;
  return statsExtended[statId];
}

export function getStatMetadataByAbbr(statAbbrEnglish: string): StatMetadata {
  return Object.values(statsExtended).find(stat => stat.abbr.english === statAbbrEnglish);
}

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
