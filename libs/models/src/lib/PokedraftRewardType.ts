
export enum PokedraftRewardTypeConstants {
  PLATINUM = 'platinum',
  GOLD = 'gold',
  SILVER = 'silver',
  BRONZE = 'bronze'
}

export type PokedraftRewardType =
  PokedraftRewardTypeConstants.PLATINUM |
  PokedraftRewardTypeConstants.GOLD |
  PokedraftRewardTypeConstants.SILVER |
  PokedraftRewardTypeConstants.BRONZE;
