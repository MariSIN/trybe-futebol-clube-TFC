export interface IMatches {
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IUpdateMatches {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface INewMatches {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}
