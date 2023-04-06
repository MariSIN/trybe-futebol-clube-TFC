import { Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';
import validateToken from '../middlewares/tokenValitation';
import LoginValitadion from '../middlewares/loginValidations';
import verifyRequiredFields from '../middlewares/verifyRequiredFields';

const loginRouter = Router();
const loginController = new UserController();

loginRouter.post(
  '/',
  verifyRequiredFields('login'),
  LoginValitadion,
  (req: Request, res: Response) => loginController.login(req, res),
);

loginRouter.get('/role', validateToken, loginController.loginRole);

export default loginRouter;
