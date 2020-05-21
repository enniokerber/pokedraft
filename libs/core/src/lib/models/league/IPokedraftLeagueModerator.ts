import {IPokedraftUserSnippet, MOCK_POKEDRAFT_USER_SNIPPET} from "../user/IPokedraftUserSnippet";

export interface IPokedraftLeagueModerator {
  user: IPokedraftUserSnippet;
  claims: string[];
}

export enum ModeratorClaims {
  ADMIN = 'admin',
  ORGANIZER = 'organizer',
  EDIT_DRAFT = 'edit_draft',
  EDIT_SCHEDULE = 'edit_schedule',
  ENTER_RESULTS = 'enter_results',
  INVITE_PLAYERS = 'invite_players'
}

export type ModeratorClaim =
  'admin' | 'organizer' | 'edit_draft' | 'edit_schedule' |
  'enter_results' | 'invite_players';

export const moderatorClaims: ModeratorClaim[] = [
  ModeratorClaims.ADMIN,
  ModeratorClaims.ORGANIZER,
  ModeratorClaims.EDIT_DRAFT,
  ModeratorClaims.EDIT_SCHEDULE,
  ModeratorClaims.ENTER_RESULTS,
  ModeratorClaims.INVITE_PLAYERS,
];

export const MOCK_POKEDRAFT_LEAGUE_MODERATOR: IPokedraftLeagueModerator = {
  user: MOCK_POKEDRAFT_USER_SNIPPET,
  claims: [ ModeratorClaims.ORGANIZER ]
};
