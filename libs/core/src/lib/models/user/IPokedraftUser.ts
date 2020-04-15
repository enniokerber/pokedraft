import {IPokedraftUserAchievements, MOCK_POKEDRAFT_USER_ACHIEVEMENTS} from "./IPokedraftUserAchievements";
import {IPokedraftLeagueSnippet} from "../league/IPokedraftLeagueSnippet";

export interface IPokedraftUser {
  uid: string;
  username: string;
  profileDescription: string;
  profilePicture: string;
  leagues: IPokedraftLeagueSnippet[];
  achievements: IPokedraftUserAchievements;
  createdAt: Date;
}

export const MOCK_POKEDRAFT_USER: IPokedraftUser = {
  uid: 'someid',
  username: 'Some Username',
  profileDescription: '',
  profilePicture: '',
  leagues: [],
  achievements: MOCK_POKEDRAFT_USER_ACHIEVEMENTS,
  createdAt: new Date()
};

export interface CreatePokedraftUserDTO {
  uid: string;
  email: string;
}

export const MOCK_POKEDRAFT_CREATE_USER_DTO: CreatePokedraftUserDTO = {
  uid: 'someuid',
  email: 'test@test.de'
};

