import {IGender} from "../api/IGender";

export enum GenderConstants {
  MALE = 'm',
  FEMALE = 'w',
  NEUTRAL = 'n',
  RANDOM = 'r'
}

export type GenderType = 'm' | 'w' | 'n' | 'r';

export const genders = [
  GenderConstants.MALE,
  GenderConstants.FEMALE,
  GenderConstants.NEUTRAL,
  GenderConstants.RANDOM
];

export const gendersWithLabels: IGender[] = [
  {
    id: 'm',
    label: 'Male ♂',
    german: 'Männl. ♂'
  },
  {
    id: 'f',
    label: 'Female ♀',
    german: 'Weibl. ♀'
  },
  {
    id: 'n',
    label: 'Neutral'
  },
  {
    id: 'r',
    label: 'Random'
  }
];
