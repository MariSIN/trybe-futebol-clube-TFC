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
      message: 'Token must be a valid token',
    });
  }
};

export default validateToken;
