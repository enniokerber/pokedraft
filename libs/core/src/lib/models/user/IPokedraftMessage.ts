import {IPokedraftLeagueSnippet, IPokedraftUserSnippet, PokedraftRewardType} from "@pokedraft/core";
import * as firebase from 'firebase';

export interface IPokedraftMessage {
  id?: string;
  from?: IPokedraftUserSnippet;
  to: string; // userId
  title?: string;
  content: {
    text: string;
    league?: IPokedraftLeagueSnippet;
    reward?: IPokedraftReward;
  },
  createdAt: firebase.firestore.Timestamp;
  seen?: boolean;
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
  to: 'someuser',
  title: 'Some Message Subject',
  content: {
    text: '',
    league: {
      id: 'someleagueid',
      name: 'Some League S1',
      logo: ''
    }
  },
  createdAt: firebase.firestore.Timestamp.now(),
  seen: false
};

export const MOCK_POKEDRAFT_MESSAGE_REWARD: IPokedraftMessage = {
  to: 'someuser',
  content: {
    text: 'Some Gold Reward',
    reward: {
      draftPoints: 10,
      type: 'gold'
    }
  },
  createdAt: firebase.firestore.Timestamp.now()
};

export const MOCK_POKEDRAFT_MESSAGE_ARRAY: IPokedraftMessage[] = [MOCK_POKEDRAFT_MESSAGE_LEAGUE, MOCK_POKEDRAFT_MESSAGE_REWARD];
