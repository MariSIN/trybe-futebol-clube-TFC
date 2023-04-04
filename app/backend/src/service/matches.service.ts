import { ModelStatic } from 'sequelize';
import MatchesModel from '../database/models/Matches.model';
import Teams from '../database/models/Teams.model';
import { IMatches, IUpdateMatches } from '../interfaces/IMatche';

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

  public async filteredMatches(inProgress: boolean): Promise<IMatches[]> {
    const result = await this._matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: { inProgress },
    });

    return result;
  }

  public async finishMatches(id: string): Promise<{ message: string }> {
    await this._matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return { message: 'Finished' };
  }

  public async updateMatches(update: IUpdateMatches, id: string):
  Promise<{ message: string }> {
    const { homeTeamGoals, awayTeamGoals } = update;

    await this._matchesModel.update({
      homeTeamGoals,
      awayTeamGoals,

    }, { where: { id } });

    /* if (inProgress === false) {
      return { message: 'Finished Match' };
    } */

    return { message: 'Updated Match' };
  }
}

export default MatchesService;
