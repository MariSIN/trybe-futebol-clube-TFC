import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCode';

const LoginValitadion = (req: Request, res: Response, next: NextFunction)
: Response | void => {
  const { email, password } = req.body;
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    return res.status(statusCodes.unauthorized).json({ message: 'Invalid email or password' });
  }

  if (password.length <= 6) {
    return res.status(statusCodes.unauthorized).json({ message: 'Invalid email or password' });
  }
  next();
};

export default LoginValitadion;
