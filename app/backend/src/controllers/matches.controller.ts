import { Request, Response } from 'express';
import MatchesService from '../service/matches.service';

class MatchesController {
  constructor(private _matchesService = new MatchesService()) {
  }

  public getAllMatches = async (_req: Request, res: Response): Promise<Response> => {
    const result = await this._matchesService.getAllMatches();
    return res.status(200).json(result);
  };
}

export default MatchesController;
