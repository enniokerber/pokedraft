import {IPokedraftUserAchievements, MOCK_POKEDRAFT_USER_ACHIEVEMENTS} from "./IPokedraftUserAchievements";
import * as firebase from 'firebase';

export interface IPokedraftUser {
  uid: string;
  username: string;
  profileDescription: string;
  profilePicture: string;
  achievements: IPokedraftUserAchievements;
  createdAt: Date;
}

export const MOCK_POKEDRAFT_USER: IPokedraftUser = {
  uid: 'someid',
  username: 'Some Username',
  profileDescription: '',
  profilePicture: '',
  achievements: MOCK_POKEDRAFT_USER_ACHIEVEMENTS,
  createdAt: firebase.firestore.Timestamp.now().toDate()
};

export interface CreatePokedraftUserDTO {
  uid: string;
  email: string;
}

export const MOCK_POKEDRAFT_CREATE_USER_DTO: CreatePokedraftUserDTO = {
  uid: 'someuid',
  email: 'test@test.de'
};

