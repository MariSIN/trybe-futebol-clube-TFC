import { Request, Response, Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamRouter = Router();
const teamsController = new TeamsController();

teamRouter.get('/', (req: Request, res: Response) => teamsController.getAllTeams(req, res));
teamRouter.get('/:id', (req: Request, res: Response) => teamsController.getOneTeam(req, res));

export default teamRouter;
