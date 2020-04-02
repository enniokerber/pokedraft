import {IPokedraftUserAchievements} from "./IPokedraftUserAchievements";

export interface IPokedraftUser {
  uid: string;
  username: string;
  profileDescription: string;
  profilePicture: string;
  achievements: IPokedraftUserAchievements;
  createdAt: Date;
}

export interface CreatePokedraftUserDTO {
  uid: string;
  email: string;
}
