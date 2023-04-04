import { Request, Response } from 'express';
import MatchesService from '../service/matches.service';

class MatchesController {
  constructor(private _matchesService = new MatchesService()) {
  }

  public getAllMatches = async (req: Request, res: Response): Promise<Response> => {
    const { inProgress } = req.query;

    if (!inProgress) {
      const allMatches = await this._matchesService.getAllMatches();
      return res.status(200).json(allMatches);
    }

    const filteredMatches = await this._matchesService.filteredMatches(inProgress === 'true');
    return res.status(200).json(filteredMatches);
  };

  public finishMatches = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const finish = await this._matchesService.finishMatches(id);
    return res.status(200).json(finish);
  };

  public updateMatches = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const update = await this._matchesService.updateMatches({ homeTeamGoals, awayTeamGoals }, id);
    return res.status(200).json(update);
  };
}

export default MatchesController;
