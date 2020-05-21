import {
  IPokedraftUser,
  IPokedraftUserSnippet,
  toUserSnippet
} from '../user';
import {
  ILongShortName,
} from './ILongShortName';
import {IPokedraftLeagueSettings} from './IPokedraftLeagueSettings';

export interface IPokedraftLeague {
  id?: string; // not needed on create
  name: ILongShortName;
  description: string;
  owner: IPokedraftUserSnippet;
  logo: string;
  users: {
    participators: {
      ids: string[];
      snippets: IPokedraftUserSnippet[];
    }
  };
  settings: IPokedraftLeagueSettings;
  createdAt: any;
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
  users: {
    participators: {
      ids: ['someuid'],
      snippets: []
    }
  },
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

export function constructLeague(createLeagueDTO: IPokedraftCreateLeagueDTO,
                                owner: IPokedraftUser | IPokedraftUserSnippet): IPokedraftLeague {

  const ownerSnippet: IPokedraftUserSnippet = toUserSnippet(owner);

  const users = {
    participators: {
      ids: [ owner.uid ],
      snippets: [ ownerSnippet ],
    },
  }

  const date: number = Date.now();

  return ({
    ...createLeagueDTO,
    owner: ownerSnippet,
    users,
    createdAt: date
  }) as IPokedraftLeague;
}
