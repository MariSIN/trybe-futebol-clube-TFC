import { Request, Response, Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter.get('/', (req: Request, res: Response) => TeamsController.getAllTeams(req, res));

export default teamRouter;
