import TeamsModel from '../database/models/teams.model';
import ITeams from '../interfaces/teams';

class TeamsService {
  private _teamsModel: TeamsModel;

  constructor(teamsModel: TeamsModel) {
    this._teamsModel = teamsModel;
  }

  static async getAllTeams(): Promise<ITeams[]> {
    const result = await TeamsModel.findAll();
    return result;
  }
}

export default TeamsService;
