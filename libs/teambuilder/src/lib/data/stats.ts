import {StatMetadata, StatWithLabel} from "../models/api/IStats";

export const stats = {
    HP: 'hp',
    ATK: 'atk',
    DEF: 'def',
    SPATK: 'spatk',
    SPDEF: 'spdef',
    SPEED: 'speed'
};

export const statsExtended: { [key: string]: StatMetadata } = {
  HP: {
    statId: stats.HP,
    name: 'Healthpoints',
    nameGerman: 'Kraftpunkte',
    abbr: 'HP',
    abbrGerman: 'KP'
  },
  ATK: {
    statId: stats.ATK,
    name: 'Attack',
    nameGerman: 'Angriff',
    abbr: 'Atk',
    abbrGerman: 'Ang'
  },
  DEF: {
    statId: stats.DEF,
    name: 'Defense',
    nameGerman: 'Verteidigung',
    abbr: 'Def',
    abbrGerman: 'Vert'
  },
  SPATK: {
    statId: stats.SPATK,
    name: 'Special Attack',
    nameGerman: 'Spezial-Angriff',
    abbr: 'SpA',
    abbrGerman: 'SpA'
  },
  SPDEF: {
    statId: stats.SPDEF,
    name: 'Special Defense',
    nameGerman: 'Spezial-Verteidigung',
    abbr: 'SpD',
    abbrGerman: 'SpV'
  },
  SPEED: {
    statId: stats.SPEED,
    name: 'Speed',
    nameGerman: 'Initiative',
    abbr: 'Spe',
    abbrGerman: 'Init'
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
