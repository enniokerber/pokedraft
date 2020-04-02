import {IPokedraftLeague} from "@pokedraft-fire/models";

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
