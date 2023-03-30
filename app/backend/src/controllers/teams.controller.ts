import { Request, Response } from 'express';
import TeamsService from '../service/teams.service';

class TeamsController {
  private _teamsService: TeamsService;

  constructor(teamsService: TeamsService) {
    this._teamsService = teamsService;
  }

  static getAllTeams = async (_req: Request, res: Response): Promise<Response> => {
    const result = await TeamsService.getAllTeams();
    return res.status(200).json(result);
  };
}

export default TeamsController;
