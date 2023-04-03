import { Request, Response } from 'express';
import TeamsService from '../service/teams.service';

class TeamsController {
  constructor(private _teamsService = new TeamsService()) {
  }

  public getAllTeams = async (_req: Request, res: Response): Promise<Response> => {
    const result = await this._teamsService.getAllTeams();
    return res.status(200).json(result);
  };

  public getOneTeam = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await this._teamsService.getOneTeam(id);
    return res.status(200).json(result);
  };
}

export default TeamsController;
