import {ITier} from "../models/api";


export const TestTiers: ITier[] = [
  {
    'id': 'AG',
    'name': 'Anything Goes',
    'description': { english: 'All Pokémon including Mega-Rayquaza, Abilities and Items can be used.' },
    'nr': 1,
    'isCommon': false
  },
  {
    'id': 'Uber',
    'name': 'Uber',
    'description': {
      english: 'The highest tier that includes a lot of overpowered legendaries.',
      german: 'Das höchste Tier. Enthält eine Menge overpowerte Legendäre und andere Pokémon.'
    },
    'nr': 2,
    'isCommon': true
  },
  {
    'id': 'OU',
    'name': 'Overused',
    'description': { english: '' },
    'nr': 3,
    'isCommon': true
  },
  {
    'id': 'UUBL',
    'name': 'Underused Borderline',
    'description': { english: '' },
    'nr': 4,
    'isCommon': true
  },
  {
    'id': '(OU)',
    'name': 'OU by Technicality',
    'description': {
      'english': 'This is an absolutely unnecessary tier.',
      'german': 'Das ist ein unnötiges Tier.',
    },
    'nr': 5,
    'isCommon': true
  },
  {
    'id': 'UU',
    'name': 'Underused',
    'description': { english: '' },
    'nr': 6,
    'isCommon': true
  },
  {
    'id': 'RUBL',
    'name': 'Rarelyused Borderline',
    'description': { english: '' },
    'nr': 7,
    'isCommon': true
  },
  {
    'id': 'RU',
    'name': 'Rarelyused',
    'description': { english: '' },
    'nr': 8,
    'isCommon': true
  },
  {
    'id': 'NUBL',
    'name': 'Neverused Borderline',
    'description': { english: '' },
    'nr': 9,
    'isCommon': true
  },
  {
    'id': 'NU',
    'name': 'Neverused',
    'description': { english: '' },
    'nr': 10,
    'isCommon': true
  },
  {
    'id': 'PUBL',
    'name': 'PU Borderline',
    'description': { english: '' },
    'nr': 11,
    'isCommon': true
  },
  {
    'id': 'PU',
    'name': 'PU',
    'description': { english: '' },
    'nr': 12,
    'isCommon': true
  },
  {
    'id': '(PU)',
    'name': 'Below PU',
    'description': { english: '' },
    'nr': 13,
    'isCommon': true
  },
  {
    'id': 'NFE',
    'name': 'Not Fully Evolved Pokémon',
    'description': { english: 'NFE as a tier refers to not fully evolved Pokémon that aren´t legal in LC and don\'t make the usage cutoff for a tier such as PU.' },
    'nr': 14,
    'isCommon': false
  },
  {
    'id': 'Unreleased',
    'name': 'Unreleased Pokémon',
    'description': { english: '' },
    'nr': 15,
    'isCommon': false
  },
  {
    'id': 'LC Uber',
    'name': 'Little-Cup Uber',
    'description': { english: '' },
    'nr': 16,
    'isCommon': false
  },
  {
    'id': 'LC',
    'name': 'Little-Cup',
    'description': { english: '' },
    'nr': 17,
    'isCommon': false
  },
  {
    'id': 'Illegal',
    'name': 'Illegal Pokémon',
    'description': { english: '' },
    'nr': 18,
    'isCommon': false
  }
];
