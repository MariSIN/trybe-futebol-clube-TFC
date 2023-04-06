import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/', (req, res) => leaderboardController.getHomeTeamPerformance(req, res));

export default leaderboardRouter;
