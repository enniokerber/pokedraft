import { IPokedraftUser } from '@pokedraft-fire/models';

export interface ILeague {
  id: string;
  name: string;
  owner: IPokedraftUser;
  description: string;
}
