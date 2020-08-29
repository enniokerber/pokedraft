import { IPokedraftUserSnippet } from '@pokedraft/core';
import { ITeambuilderPokemon } from './ITeambuilderPokemon';
import { MAX_HAPPINESS } from '../../data';
import { Genders } from '../types';
import { Tiers } from './ITier';

export interface ITeambuilderTeam {
  id?: string;
  author: IPokedraftUserSnippet;
  name: string;
  createdAt: number;
  lastUpdate: number;
  tier: Tiers;
  public?: boolean;
  pokemon: ITeambuilderPokemon[];
}

export type PartialTeambuilderTeam = Partial<ITeambuilderTeam>;

export interface ITeambuilderTeamSnippet {
  id?: string;
  name: string;
  tier: Tiers;
  pokemon: string[];
}

export const testTeam: ITeambuilderTeam = {
  id: 'someid',
  author: {
    uid: 'abcdef',
    username: 'NJO',
    profilePicture: ''
  },
  name: 'Test Team',
  createdAt: 818123853979,
  lastUpdate: 818123853979,
  tier: Tiers.OU,
  public: true,
  pokemon: [
    {
      id: 'grookey',
      nickname: 'Donkey Kong',
      level: 100,
      happiness: MAX_HAPPINESS,
      nature: 1,
      gender: Genders.MALE,
      shiny: true,
      item: '1',
      ability: '34',
      moves: ['33', "512","372","213"],
      evs: { atk: 255, hp: 240 },
      dvs: { speed: 0 }
    },
    {
      id: 'cinderace',
      nature: 4,
      item: '2',
      ability: '35',
      moves: ['44'],
      evs: { },
      dvs: { }
    },
    {
      id: 'grimmsnarl',
      nature: 8,
      item: '2',
      ability: '35',
      moves: ['44'],
      evs: { atk: 255 },
      dvs: { atk: 31 }
    },
    {
      id: 'hatterene',
      nature: 12,
      item: '3',
      ability: '35',
      moves: ['56'],
      evs: { },
      dvs: { }
    },
  ]
};

export const testTeamSnippet: ITeambuilderTeamSnippet = {
  id: 'B3tfZxVEKeWue0YYgd9N',
  name: 'Test Team Überschrift',
  tier: Tiers.OU,
  pokemon: ['grookey', 'cinderace', 'zamazenta', 'grimmsnarl', 'hatterene', 'eternatus']
};

export const testTeamSnippetArray: ITeambuilderTeamSnippet[] = [
  testTeamSnippet,
  {
    id: 'anotherid',
    name: 'Nerviges Team',
    tier: Tiers.PU,
    pokemon: ['centiskorch']
  },
  {
    id: 'bla',
    name: 'Whatever this team is called',
    tier: Tiers.UU,
    pokemon: ['eiscue', 'indeedee', 'grimmsnarl', 'zacian']
  }
];

