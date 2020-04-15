import {IPokedraftUserSnippet} from "../user/IPokedraftUserSnippet";

export interface IPokedraftLeagueParticipatorsDocument {
  participatorIds?: string[];
  participatorSnippets?: IPokedraftUserSnippet[];
  participatorCount?: number;
}
