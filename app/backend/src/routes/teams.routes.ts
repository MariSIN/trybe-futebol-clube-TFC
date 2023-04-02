import { Request, Response, Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter.get('/', (req: Request, res: Response) => TeamsController.getAllTeams(req, res));
teamRouter.get('/:id', (req: Request, res: Response) => TeamsController.getOneTeam(req, res));

export default teamRouter;
