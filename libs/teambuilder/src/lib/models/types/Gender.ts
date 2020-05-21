import {IGender} from "../api/IGender";

export enum Genders {
  MALE = 'm',
  FEMALE = 'w',
  NEUTRAL = 'n',
  RANDOM = 'r'
}

export type GenderType = 'm' | 'w' | 'n' | 'r';

export const genders: GenderType[] = [
  Genders.MALE,
  Genders.FEMALE,
  Genders.NEUTRAL,
  Genders.RANDOM
];

export const gendersWithLabels: IGender[] = [
  {
    id: 'm',
    label: {
      english: 'Male ♂',
      german: 'Männl. ♂'
    }
  },
  {
    id: 'f',
    label: {
      english: 'Female ♀',
      german: 'Weibl. ♀'
    }
  },
  {
    id: 'n',
    label: {
      english: 'Neutral'
    }
  },
  {
    id: 'r',
    label: {
      english: 'Random',
      german: 'Zufall'
    }
  }
];
