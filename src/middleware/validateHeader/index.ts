import { Response, NextFunction } from 'express';
import { errorHandler } from '../../utilities/errors';
import { logger } from '../../utilities/logger';
import { applicationConstants } from '../../components/applicationConstants';
const validate = require('uuid-validate');

export const validateHeader = (req: any, res: Response, next: NextFunction) => {
  const correlationId: string = req.get(applicationConstants.CorrelationId);
  if (correlationId && validate(correlationId)) {
    req.locals = Object.assign({}, { tracking: res.locals.tracking });
    next();
  } else {
    logger.error('validateHeader', { status: 403, message: 'required header not found/invalid' });
    return next(errorHandler.forbiddenError('required header not found/invalid'));
  }
};
