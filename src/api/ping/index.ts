import { Request, Response, NextFunction } from 'express';
import express from 'express';
const router = express.Router();

router.get('/', (_req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'pong' });
});

export const pingRoutes = router;
