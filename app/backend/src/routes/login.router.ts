import { Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';
import LoginValitadion from '../middlewares/validationsLogin';
import verifyRequiredFields from '../middlewares/verifyRequiredFields';

const loginRouter = Router();
const loginController = new UserController();

loginRouter.post(
  '/',
  verifyRequiredFields('login'),
  LoginValitadion,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default loginRouter;
