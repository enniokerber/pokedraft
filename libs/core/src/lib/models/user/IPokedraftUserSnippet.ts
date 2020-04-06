import {IPokedraftUser} from "@pokedraft/core";

export interface IPokedraftUserSnippet {
  uid: string;
  username: string;
  profilePicture: string;
}

export function toUserSnippet({ uid, username, profilePicture }: IPokedraftUser) {
  return ({
    uid,
    username,
    profilePicture
  });
}
