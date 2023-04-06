import { ModelStatic } from 'sequelize';
import TeamsModel from '../database/models/Teams.model';
import ITeams from '../interfaces/ITeams';

class TeamsService {
  private _teamsModel: ModelStatic<TeamsModel> = TeamsModel;

  public async getAllTeams(): Promise<ITeams[]> {
    const result = await this._teamsModel.findAll();

    return result;
  }

  public async getOneTeam(id: string): Promise<ITeams | null> {
    const result = await this._teamsModel.findByPk(id);
    return result;
  }
}

export default TeamsService;
