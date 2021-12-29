import { Response, NextFunction, Request } from 'express';

// const requestLogger = require('@trv/request-logger').express;

export const logger = (opts: any): any => {
  if (process.env.NODE_ENV !== 'test') {
    return console.log(opts);
  }
  return (_req: Request, _res: Response, next: NextFunction): any => {
    next();
  };
};
