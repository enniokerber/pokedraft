import {IPokedraftUser} from "@pokedraft-fire/models";

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
