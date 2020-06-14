
export interface SingleHazardStatistics {
  class: string; // class identifier
  name: string;
  users: number; // amount of Pokémon on your team with this hazards
  hits: number; // how many Pokémon of your team can be hit by this hazard type
  immune: number; // how many Pokémon of your team are immune to this hazard type
  weaknesses: number; // how many Pokémon of your team are weak to this hazard type
}

export type HazardStatistics = SingleHazardStatistics[];

export enum Hazards {
  STEALTH_ROCK = 'Stealth Rock',
  SPIKES = 'Spikes',
  TOXIC_SPIKES = 'Toxic Spikes',
  DEFOG = 'Defog',
  RAPID_SPINNER = 'Rapid Spin'
}

export const HAZARDS = [
  Hazards.STEALTH_ROCK,
  Hazards.SPIKES,
  Hazards.TOXIC_SPIKES,
  Hazards.DEFOG,
  Hazards.RAPID_SPINNER
];

export type HazardStatisticsMap = Record<string, SingleHazardStatistics>;
