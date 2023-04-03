import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCode';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email) || password.length < 6) {
    return res.status(statusCodes.unauthorized).json({ message: 'Invalid email or password' });
  }

  next();
};

export default validateLogin;
