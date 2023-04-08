import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderboards.service';
import statusCodes from '../statusCode';

class LeaderboardController {
  constructor(private _leaderboardService = new LeaderboardService()) {
  }

  public getTeamPerformance = async (req: Request, res: Response): Promise<Response> => {
    const [result] = await this._leaderboardService.getTeamPerformance(req.baseUrl);

    return res.status(statusCodes.ok).json(result);
  };
}

export default LeaderboardController;
