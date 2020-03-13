
export interface IPokedraftUser {
  uid: string;
  username: string;
  profileDescription: string;
  profilePicture: string;
  titles: string[];
  leagues: any[];
  draftPoints: number;
  createdAt: Date;
}

export interface CreatePokedraftUserDTO {
  uid: string;
  email: string;
}
