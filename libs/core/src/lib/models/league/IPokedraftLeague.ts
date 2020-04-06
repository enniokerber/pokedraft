import {IPokedraftLeagueSettings, IPokedraftUserSnippet} from '@pokedraft/core';
import * as firebase from "firebase";

export interface IPokedraftLeague {
  id?: string; // not needed on create
  name: {
    long: string;
    short: string;
  };
  description: string;
  owner: IPokedraftUserSnippet;
  users: string[];
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
  users: ['someuid'],
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
  createdAt: firebase.firestore.Timestamp.now()
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
