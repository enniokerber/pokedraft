import {statsExtended as stats} from './stats';
import {INature} from "../models/api/INature";

export const statAffectingNatures: INature[] = [

  // +ATK
  {
    germanName: 'Hart',
    name: 'Adamant',
    increases: stats.ATK,
    decreases: stats.SPATK
  },
  {
    germanName: 'Mutig',
    name: 'Brave',
    increases: stats.ATK,
    decreases: stats.SPEED
  },
  {
    germanName: 'Solo',
    name: 'Lonely',
    increases: stats.ATK,
    decreases: stats.DEF
  },
  {
    germanName: 'Frech',
    name: 'Naughty',
    increases: stats.ATK,
    decreases: stats.SPDEF
  },

  // +DEF
  {
    germanName: 'Kühn',
    name: 'Bold',
    increases: stats.DEF,
    decreases: stats.ATK
  },
  {
    germanName: 'Pfiffig',
    name: 'Impish',
    increases: stats.DEF,
    decreases: stats.SPATK
  },
  {
    germanName: 'Lasch',
    name: 'Lax',
    increases: stats.DEF,
    decreases: stats.SPDEF
  },
  {
    germanName: 'Locker',
    name: 'Relaxed',
    increases: stats.DEF,
    decreases: stats.SPEED
  },

  // +SPATK

  {
    germanName: 'Mild',
    name: 'Mild',
    increases: stats.SPATK,
    decreases: stats.DEF
  },
  {
    germanName: 'Mäßig',
    name: 'Modest',
    increases: stats.SPATK,
    decreases: stats.ATK
  },
  {
    germanName: 'Ruhig',
    name: 'Quiet',
    increases: stats.SPATK,
    decreases: stats.SPEED
  },
  {
    germanName: 'Hitzig',
    name: 'Rash',
    increases: stats.SPATK,
    decreases: stats.SPDEF
  },

  // +SPDEF

  {
    germanName: 'Still',
    name: 'Calm',
    increases: stats.SPDEF,
    decreases: stats.ATK
  },
  {
    germanName: 'Forsch',
    name: 'Careful',
    increases: stats.SPDEF,
    decreases: stats.SPEED
  },
  {
    germanName: 'Zart',
    name: 'Gentle',
    increases: stats.SPDEF,
    decreases: stats.DEF
  },
  {
    germanName: 'Sacht',
    name: 'Sassy',
    increases: stats.SPDEF,
    decreases: stats.SPATK
  },


  // +SPEED

  {
    germanName: 'Hastig',
    name: 'Hasty',
    increases: stats.SPEED,
    decreases: stats.DEF
  },
  {
    germanName: 'Froh',
    name: 'Jolly',
    increases: stats.SPEED,
    decreases: stats.SPATK
  },
  {
    germanName: 'Naiv',
    name: 'Naive',
    increases: stats.SPEED,
    decreases: stats.SPDEF
  },
  {
    germanName: 'Scheu',
    name: 'Timid',
    increases: stats.SPEED,
    decreases: stats.ATK
  }
];

export const neutralNatures: INature[] = [
  {
    germanName: 'Zaghaft',
    name: 'Bashful'
  },
  {
    germanName: 'Sanft',
    name: 'Docile'
  },
  {
    germanName: 'Robust',
    name: 'Hardy'
  },
  {
    germanName: 'Kauzig',
    name: 'Quirky'
  },
  {
    germanName: 'Ernst',
    name: 'Serious'
  }
];

export const natures: INature[] = [
  ...statAffectingNatures,
  ...neutralNatures
];

export const DEFAULT_NATURE: INature = {
  germanName: 'Zaghaft',
  name: 'Bashful'
};

