import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { CustomError } from '../models/etudiant.model';

export const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: {
      message: err.message || 'Erreur interne du serveur',
      status: statusCode
    }
  });
};
