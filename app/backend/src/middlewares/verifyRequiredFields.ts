import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCode';

const requestRequiredFields = {
  login: ['email', 'password'],
};

const verifyRequiredFields = (key: keyof typeof requestRequiredFields) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const requireFields = requestRequiredFields[key];

    for (let i = 0; i < requireFields.length; i += 1) {
      if (!req.body[requireFields[i]]) {
        return res.status(statusCodes.badRequest).json({
          message: 'All fields must be filled',
        });
      }
    }
    next();
  };

export default verifyRequiredFields;
