import { Request, Response } from 'express';
import MatchesService from '../service/matches.service';
import statusCodes from '../statusCode';

class MatchesController {
  constructor(private _matchesService = new MatchesService()) {
  }

  public getAllMatches = async (req: Request, res: Response): Promise<Response> => {
    const { inProgress } = req.query;

    if (!inProgress) {
      const allMatches = await this._matchesService.getAllMatches();
      return res.status(statusCodes.ok).json(allMatches);
    }

    const filteredMatches = await this._matchesService.filteredMatches(inProgress === 'true');
    return res.status(statusCodes.ok).json(filteredMatches);
  };

  public finishMatches = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const finish = await this._matchesService.finishMatches(id);
    return res.status(statusCodes.ok).json(finish);
  };

  public updateMatches = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const update = await this._matchesService.updateMatches({ homeTeamGoals, awayTeamGoals }, id);
    return res.status(statusCodes.ok).json(update);
  };

  public createMatches = async (req: Request, res: Response): Promise<Response> => {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

    const create = await this._matchesService.createMatch({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals,
    });

    return res.status(statusCodes.created).json(create);
  };
}

export default MatchesController;
