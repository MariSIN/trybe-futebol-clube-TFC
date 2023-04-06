import { ModelStatic } from 'sequelize';
import MatchesModel from '../database/models/Matches.model';
import queryHomePerformance from '../helpers/querys';
import ILeaderboard from '../interfaces/ILeaderboards';

class LeaderboardService {
  private _matchesModel: ModelStatic<MatchesModel> = MatchesModel;

  public async getHomeTeamPerformance():Promise<ILeaderboard[]> {
    const result = await this._matchesModel.sequelize?.query(
      queryHomePerformance,
    );
    return result as ILeaderboard[];
  }
}

export default LeaderboardService;
