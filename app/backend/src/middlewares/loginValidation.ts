import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/token';
import statusCodes from '../statusCode';

const validateToken = async (req:Request, res:Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(statusCodes.unauthorized).json({
      message: 'Token not found',
    });
  }
  try {
    const decoded = verifyToken(authorization);
    req.body.userToken = decoded;
    next();
  } catch (err) {
    return res.status(statusCodes.unauthorized).json({
      message: 'Invalid Token',
    });
  }
};

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email) || password.length < 6) {
    return res.status(statusCodes.unauthorized).json({ message: 'Invalid email or password' });
  }

  next();
};

export default {
  validateToken,
  validateLogin,
};
