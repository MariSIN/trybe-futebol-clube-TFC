import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import validateToken from '../middlewares/tokenValitation';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));

matchesRouter.patch('/:id/finish', validateToken, (req: Request, res: Response) => matchesController
  .finishMatches(req, res));

matchesRouter.patch('/:id', validateToken, (req: Request, res: Response) => matchesController
  .updateMatches(req, res));

matchesRouter.post('/', validateToken, (req: Request, res: Response) => matchesController
  .createMatches(req, res));

export default matchesRouter;
