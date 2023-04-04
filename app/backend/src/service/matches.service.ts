import { ModelStatic } from 'sequelize';
import MatchesModel from '../database/models/Matches.model';
import IMatches from '../interfaces/IMatche';

class MatchesService {
  private _matchesModel: ModelStatic<MatchesModel> = MatchesModel;

  public async getAllMatches(): Promise<IMatches[]> {
    const result = await this._matchesModel.findAll();
    return result;
  }
}

export default MatchesService;
