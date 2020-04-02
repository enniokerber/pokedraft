import {IPokedraftUserSnippet} from '@pokedraft-fire/models';
import {IPokedraftLeagueSettings} from "@pokedraft-fire/models";
import * as firebase from "firebase/app";

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

export interface IPokedraftCreateLeagueDTO {
  name: {
    long: string;
    short: string;
  };
  description: string;
  logo: string;
  settings: IPokedraftLeagueSettings;
}
