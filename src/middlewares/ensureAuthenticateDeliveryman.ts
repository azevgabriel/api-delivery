import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticateDeliveryman(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token not provided',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      process.env.MD5_DELIVERYMAN_SECRET || '150a8ec9d29a46d1f0051847597cab74'
    );

    req.id_user = sub as string;

    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
}
