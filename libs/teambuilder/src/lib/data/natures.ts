import {statsExtended as stats} from './stats';
import {INature} from "../models/api/INature";

export const statAffectingNatures: INature[] = [

  // +ATK
  {
    id: 5,
    name: {
      english: 'Adamant',
      german: 'Hart',
    },
    increases: stats.ATK,
    decreases: stats.SPATK
  },
  {
    id: 6,
    name: {
      english: 'Brave',
      german: 'Mutig',
    },
    increases: stats.ATK,
    decreases: stats.SPEED
  },
  {
    id: 7,
    name: {
      english: 'Lonely',
      german: 'Solo',
    },
    increases: stats.ATK,
    decreases: stats.DEF
  },
  {
    id: 8,
    name: {
      english: 'Naughty',
      german: 'Frech',
    },
    increases: stats.ATK,
    decreases: stats.SPDEF
  },

  // +DEF
  {
    id: 9,
    name: {
      english: 'Bold',
      german: 'Kühn',
    },
    increases: stats.DEF,
    decreases: stats.ATK
  },
  {
    id: 10,
    name: {
      english: 'Impish',
      german: 'Pfiffig',
    },
    increases: stats.DEF,
    decreases: stats.SPATK
  },
  {
    id: 11,
    name: {
      english: 'Lax',
      german: 'Lasch',
    },
    increases: stats.DEF,
    decreases: stats.SPDEF
  },
  {
    id: 12,
    name: {
      english: 'Relaxed',
      german: 'Locker',
    },
    increases: stats.DEF,
    decreases: stats.SPEED
  },

  // +SPATK

  {
    id: 13,
    name: {
      english: 'Mild',
      german: 'Mild',
    },
    increases: stats.SPATK,
    decreases: stats.DEF
  },
  {
    id: 14,
    name: {
      english: 'Modest',
      german: 'Mäßig',
    },
    increases: stats.SPATK,
    decreases: stats.ATK
  },
  {
    id: 15,
    name: {
      english: 'Quiet',
      german: 'Ruhig',
    },
    increases: stats.SPATK,
    decreases: stats.SPEED
  },
  {
    id: 16,
    name: {
      english: 'Rash',
      german: 'Hitzig',
    },
    increases: stats.SPATK,
    decreases: stats.SPDEF
  },

  // +SPDEF

  {
    id: 17,
    name: {
      english: 'Calm',
      german: 'Still',
    },
    increases: stats.SPDEF,
    decreases: stats.ATK
  },
  {
    id: 18,
    name: {
      english: 'Careful',
      german: 'Forsch',
    },
    increases: stats.SPDEF,
    decreases: stats.SPEED
  },
  {
    id: 19,
    name: {
      english: 'Gentle',
      german: 'Zart',
    },
    increases: stats.SPDEF,
    decreases: stats.DEF
  },
  {
    id: 20,
    name: {
      english: 'Sassy',
      german: 'Sacht',
    },
    increases: stats.SPDEF,
    decreases: stats.SPATK
  },


  // +SPEED

  {
    id: 21,
    name: {
      english: 'Hasty',
      german: 'Hastig',
    },
    increases: stats.SPEED,
    decreases: stats.DEF
  },
  {
    id: 22,
    name: {
      english: 'Jolly',
      german: 'Froh',
    },
    increases: stats.SPEED,
    decreases: stats.SPATK
  },
  {
    id: 23,
    name: {
      english: 'Naive',
      german: 'Naiv',
    },
    increases: stats.SPEED,
    decreases: stats.SPDEF
  },
  {
    id: 24,
    name: {
      english: 'Timid',
      german: 'Scheu',
    },
    increases: stats.SPEED,
    decreases: stats.ATK
  }
];

export const neutralNatures: INature[] = [
  {
    id: 0,
    name: {
      english: 'Bashful',
      german: 'Zaghaft',
    },
  },
  {
    id: 1,
    name: {
      english: 'Docile',
      german: 'Sanft',
    },
  },
  {
    id: 2,
    name: {
      english: 'Hardy',
      german: 'Robust',
    },
  },
  {
    id: 3,
    name: {
      english: 'Quirky',
      german: 'Kauzig',
    },
  },
  {
    id: 4,
    name: {
      english: 'Serious',
      german: 'Ernst',
    },
  }
];

export const natures: INature[] = [
  ...neutralNatures,
  ...statAffectingNatures,
];

export const DEFAULT_NATURE = natures[0]; // = Bashful Nature

