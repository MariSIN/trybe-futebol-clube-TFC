import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => res.status(500).json({
  message: err.message,
});

export default errorMiddleware;
