import {IPokedraftLeagueSnippet, IPokedraftUserSnippet, PokedraftRewardType} from "@pokedraft/core";

export interface IPokedraftMessage {
  id?: string;
  from?: IPokedraftUserSnippet;
  title?: string;
  message: string;
  league?: IPokedraftLeagueSnippet;
  reward?: IPokedraftReward;
  createdAt: any;
}

export interface IPokedraftReward {
  type?: PokedraftRewardType;
  draftPoints?: number;
}

export const MOCK_POKEDRAFT_MESSAGE_LEAGUE: IPokedraftMessage = {
  id: 'someid',
  from: {
    uid: 'someuid',
    username: 'Mockuser',
    profilePicture: ''
  },
  title: 'Some Message Subject',
  message: '',
  league: {
    id: 'someleagueid',
    name: 'Some League S1',
    logo: ''
  },
  createdAt: null
};

export const MOCK_POKEDRAFT_MESSAGE_REWARD: IPokedraftMessage = {
  message: 'Some Gold Reward',
  reward: {
    draftPoints: 10,
    type: 'gold'
  },
  createdAt: null
};

export const MOCK_POKEDRAFT_MESSAGE_ARRAY: IPokedraftMessage[] = [MOCK_POKEDRAFT_MESSAGE_LEAGUE, MOCK_POKEDRAFT_MESSAGE_REWARD];
