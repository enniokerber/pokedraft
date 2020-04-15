import {IPokedraftUserSnippet} from "./../user/IPokedraftUserSnippet";

export interface IPokedraftTeam {
  player: IPokedraftUserSnippet;
  name: string;
  pokemon: any[];
  logo: string;

  statistics: {
    points: number;
    battleCount: number;
    killCount: number;
    deathCount: number;
    ruleBreakCount: number;
    differential: number;
    wins: number;
    draws: number;
    losses: number;
    penaltyPoints: number;
  }
}

export interface IPokedraftCreateTeamDTO {
  player: IPokedraftUserSnippet;
  name: string;
  logo: string;
}
