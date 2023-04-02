import { Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';

const loginRouter = Router();
// const login = loginValidation.validateLogin;

loginRouter.post(
  '/',
  (req: Request, res: Response) => UserController.login(req, res),
);

export default loginRouter;
