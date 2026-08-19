import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
  console.error("Erreur :", err.message);

  const status = err.status || 500;
  const message = err.message || "Erreur interne du serveur";

  res.status(status).json({
    success: false,
    message
  });
}

export function createError(status: number, message: string) {
  const error: any = new Error(message);
  error.status = status;
  return error;
}