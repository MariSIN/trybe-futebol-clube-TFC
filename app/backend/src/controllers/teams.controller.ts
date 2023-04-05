import { Request, Response } from 'express';
import TeamsService from '../service/teams.service';
import statusCodes from '../statusCode';

class TeamsController {
  constructor(private _teamsService = new TeamsService()) {
  }

  public getAllTeams = async (_req: Request, res: Response): Promise<Response> => {
    const result = await this._teamsService.getAllTeams();
    return res.status(statusCodes.ok).json(result);
  };

  public getOneTeam = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await this._teamsService.getOneTeam(id);
    return res.status(statusCodes.ok).json(result);
  };
}

export default TeamsController;
