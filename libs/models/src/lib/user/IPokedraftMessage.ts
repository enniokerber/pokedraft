import {IPokedraftLeagueSnippet, IPokedraftUserSnippet, PokedraftRewardType} from "@pokedraft-fire/models";
import * as firebase from 'firebase/app';

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

export enum PokedraftMessageTypeConstants {
  INVITATION = 'Invitation',
  NOTIFICATION = 'Notification',
  NOTIFICATION_GOLD = 'Notification_Gold',
  NOTIFICATION_SILVER = 'Notification_Silver',
  NOTIFICATION_BRONZE = 'Notification_Bronze',
  NOTIFICATION_PLATINUM = 'Notification_Platinum',
}

export type PokedraftMessageType =
  PokedraftMessageTypeConstants.INVITATION |
  PokedraftMessageTypeConstants.NOTIFICATION |
  PokedraftMessageTypeConstants.NOTIFICATION_GOLD |
  PokedraftMessageTypeConstants.NOTIFICATION_SILVER |
  PokedraftMessageTypeConstants.NOTIFICATION_BRONZE |
  PokedraftMessageTypeConstants.NOTIFICATION_PLATINUM;

export interface IPokedraftReward {
  type?: PokedraftRewardType;
  draftPoints?: number;
}

