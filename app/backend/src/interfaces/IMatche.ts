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
