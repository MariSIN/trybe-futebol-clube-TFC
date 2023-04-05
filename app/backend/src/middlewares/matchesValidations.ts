import { NextFunction, Request, Response } from 'express';
import Teams from '../database/models/Teams.model';
import statusCodes from '../statusCode';

const validateMatches = async (req: Request, res: Response, next: NextFunction)
: Promise<Response | void> => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res.status(statusCodes.unprocessableEntity).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  const teams = await Teams.findOne({
    where: { id: homeTeamId || awayTeamId },
  });

  if (!teams) {
    return res.status(statusCodes.notFound).json({
      message: 'There is no team with such id!',
    });
  }

  next();
};

export default validateMatches;
