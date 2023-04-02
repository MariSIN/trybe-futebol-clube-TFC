import TeamsModel from '../database/models/teams.model';
import ITeams from '../interfaces/ITeams';

class TeamsService {
  private _teamsModel: TeamsModel;

  constructor(teamsModel: TeamsModel) {
    this._teamsModel = teamsModel;
  }

  static async getAllTeams(): Promise<ITeams[]> {
    const result = await TeamsModel.findAll();
    return result;
  }

  static async getOneTeam(id: string): Promise<ITeams | null> {
    const result = await TeamsModel.findByPk(id);
    return result;
  }
}

export default TeamsService;
