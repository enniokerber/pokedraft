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
    increases: stats.atk,
    decreases: stats.spatk
  },
  {
    id: 6,
    name: {
      english: 'Brave',
      german: 'Mutig',
    },
    increases: stats.atk,
    decreases: stats.speed
  },
  {
    id: 7,
    name: {
      english: 'Lonely',
      german: 'Solo',
    },
    increases: stats.atk,
    decreases: stats.def
  },
  {
    id: 8,
    name: {
      english: 'Naughty',
      german: 'Frech',
    },
    increases: stats.atk,
    decreases: stats.spdef
  },

  // +DEF
  {
    id: 9,
    name: {
      english: 'Bold',
      german: 'Kühn',
    },
    increases: stats.def,
    decreases: stats.atk
  },
  {
    id: 10,
    name: {
      english: 'Impish',
      german: 'Pfiffig',
    },
    increases: stats.def,
    decreases: stats.spatk
  },
  {
    id: 11,
    name: {
      english: 'Lax',
      german: 'Lasch',
    },
    increases: stats.def,
    decreases: stats.spdef
  },
  {
    id: 12,
    name: {
      english: 'Relaxed',
      german: 'Locker',
    },
    increases: stats.def,
    decreases: stats.speed
  },

  // +SPATK

  {
    id: 13,
    name: {
      english: 'Mild',
      german: 'Mild',
    },
    increases: stats.spatk,
    decreases: stats.def
  },
  {
    id: 14,
    name: {
      english: 'Modest',
      german: 'Mäßig',
    },
    increases: stats.spatk,
    decreases: stats.atk
  },
  {
    id: 15,
    name: {
      english: 'Quiet',
      german: 'Ruhig',
    },
    increases: stats.spatk,
    decreases: stats.speed
  },
  {
    id: 16,
    name: {
      english: 'Rash',
      german: 'Hitzig',
    },
    increases: stats.spatk,
    decreases: stats.spdef
  },

  // +SPDEF

  {
    id: 17,
    name: {
      english: 'Calm',
      german: 'Still',
    },
    increases: stats.spdef,
    decreases: stats.atk
  },
  {
    id: 18,
    name: {
      english: 'Careful',
      german: 'Forsch',
    },
    increases: stats.spdef,
    decreases: stats.speed
  },
  {
    id: 19,
    name: {
      english: 'Gentle',
      german: 'Zart',
    },
    increases: stats.spdef,
    decreases: stats.def
  },
  {
    id: 20,
    name: {
      english: 'Sassy',
      german: 'Sacht',
    },
    increases: stats.spdef,
    decreases: stats.spatk
  },


  // +SPEED

  {
    id: 21,
    name: {
      english: 'Hasty',
      german: 'Hastig',
    },
    increases: stats.speed,
    decreases: stats.def
  },
  {
    id: 22,
    name: {
      english: 'Jolly',
      german: 'Froh',
    },
    increases: stats.speed,
    decreases: stats.spatk
  },
  {
    id: 23,
    name: {
      english: 'Naive',
      german: 'Naiv',
    },
    increases: stats.speed,
    decreases: stats.spdef
  },
  {
    id: 24,
    name: {
      english: 'Timid',
      german: 'Scheu',
    },
    increases: stats.speed,
    decreases: stats.atk
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

