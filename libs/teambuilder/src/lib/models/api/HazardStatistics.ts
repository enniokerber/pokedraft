import {ITranslatable} from "./ITranslatable";

export interface SingleHazardStatistics {
  class: string; // class identifier
  name: ITranslatable;

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

export const HAZARDSWITHTRANSLATION: ITranslatable[] = [
  {
    english: Hazards.STEALTH_ROCK,
    german: 'Tarnsteine'
  },
  {
    english: Hazards.SPIKES,
    german: 'Stachler'
  },
  {
    english: Hazards.TOXIC_SPIKES,
    german: 'Giftspitzen'
  },{
    english: Hazards.DEFOG,
    german: 'Auflockern'
  },
  {
    english: Hazards.RAPID_SPINNER,
    german: 'Turbodreher'
  },
];

export const HAZARDS = HAZARDSWITHTRANSLATION.map(h => h.english);



export type HazardStatisticsMap = Record<string, SingleHazardStatistics>;
