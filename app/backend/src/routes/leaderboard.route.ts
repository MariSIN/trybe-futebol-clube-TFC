import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/', (req, res) => leaderboardController.getTeamPerformance(req, res));

export default leaderboardRouter;
