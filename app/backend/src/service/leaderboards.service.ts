import { ModelStatic } from 'sequelize';
import MatchesModel from '../database/models/Matches.model';
import { queryAllTeams, queryAwayPerformance, queryHomePerformance } from '../helpers/querys';
import ILeaderboard from '../interfaces/ILeaderboards';

class LeaderboardService {
  private _matchesModel: ModelStatic<MatchesModel> = MatchesModel;

  public async getHomeTeamPerformance(url: string):Promise<ILeaderboard[]> {
    if (url === '/leaderboard/home') {
      const leaderboardHome = await this._matchesModel.sequelize?.query(
        queryHomePerformance,
      );
      return leaderboardHome as ILeaderboard[];
    }

    if (url === '/leaderboard/away') {
      const leaderboardAway = await this._matchesModel.sequelize?.query(
        queryAwayPerformance,
      );
      return leaderboardAway as ILeaderboard[];
    }

    const leaderboard = await this._matchesModel.sequelize?.query(
      queryAllTeams,
    );

    return leaderboard as ILeaderboard[];
  }
}

export default LeaderboardService;
