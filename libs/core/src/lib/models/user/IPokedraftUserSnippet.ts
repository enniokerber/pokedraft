import {IPokedraftUser} from "@pokedraft/core";

export interface IPokedraftUserSnippet {
  uid: string;
  username: string;
  profilePicture: string;
}

export function toUserSnippet({ uid, username, profilePicture }: IPokedraftUser | IPokedraftUserSnippet) {
  return ({
    uid,
    username,
    profilePicture
  });
}

export const MOCK_POKEDRAFT_USER_SNIPPET: IPokedraftUserSnippet = {
  uid: 'someuid',
  username: 'someusername',
  profilePicture: ''
};
