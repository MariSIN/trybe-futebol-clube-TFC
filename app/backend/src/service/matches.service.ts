import { ModelStatic } from 'sequelize';
import MatchesModel from '../database/models/Matches.model';
import Teams from '../database/models/Teams.model';
import IMatches from '../interfaces/IMatche';

class MatchesService {
  private _matchesModel: ModelStatic<MatchesModel> = MatchesModel;

  public async getAllMatches(): Promise<IMatches[]> {
    const result = await this._matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return result;
  }
}

export default MatchesService;
