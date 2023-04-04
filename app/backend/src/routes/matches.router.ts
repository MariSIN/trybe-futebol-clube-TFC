import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));

export default matchesRouter;
