import {ILongShortName, IPokedraftLeagueSettings, IPokedraftUserSnippet} from '@pokedraft/core';
import * as firebase from 'firebase/app';

export interface IPokedraftLeague {
  id?: string; // not needed on create
  name: ILongShortName;
  description: string;
  owner: IPokedraftUserSnippet;
  logo: string;
  settings: IPokedraftLeagueSettings;
  createdAt: firebase.firestore.Timestamp;
}

export const MOCK_POKEDRAFT_LEAGUE: IPokedraftLeague = {
  id: 'someid',
  name: {
    long: 'Long League Name',
    short: ' Short League Name'
  },
  description: 'Some League Description.',
  owner: {
    uid: 'someuid',
    username: 'Someusername',
    profilePicture: ''
  },
  logo: '',
  settings: {
    general: {
      public: true,
      participators: 10,
      platform: 'Showdown',
      format: {
        teamPokemon: 6,
        battleType: 'Singles'
      }
    },
    draft: {
      picks: 11,
      mirror: true,
      speciesClause: true
    }
  },
  createdAt: null
};

export const MOCK_POKEDRAFT_LEAGUE_ARRAY: IPokedraftLeague[] = [ MOCK_POKEDRAFT_LEAGUE, MOCK_POKEDRAFT_LEAGUE ];



export interface IPokedraftCreateLeagueDTO {
  name: {
    long: string;
    short: string;
  };
  description: string;
  logo: string;
  settings: IPokedraftLeagueSettings;
}
