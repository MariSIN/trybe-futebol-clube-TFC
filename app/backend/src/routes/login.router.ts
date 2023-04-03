import { Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';

const loginRouter = Router();
const loginController = new UserController();
// const login = loginValidation.validateLogin;

loginRouter.post(
  '/',
  (req: Request, res: Response) => loginController.login(req, res),
);

export default loginRouter;
