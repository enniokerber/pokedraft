import {IPokedraftLeague} from "@pokedraft/core";

export interface IPokedraftLeagueSnippet {
  id: string;
  name: string;
  logo: string;
}

export function toLeagueSnippet({ id, name, logo }: IPokedraftLeague): IPokedraftLeagueSnippet {
  return ({
    id,
    name: name.long,
    logo
  });
}
