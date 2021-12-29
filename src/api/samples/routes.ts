import { Request, Response, NextFunction } from 'express';
import express from 'express';
import SampleFetchService from '../../services/samples/sample-fetch.service';
import { User } from 'src/types/user';

const Joi = require('joi');
const sampleFetchService = new SampleFetchService();
const router = express.Router();

router.get('/user', (req: Request, res: Response) => {
  const user = res && res.locals && res.locals.user;
  const response: User = {
    userName: user.userName,
    userGroups: user.groups,
    userRoles: user.roles
  };
  res.send(response);
});

router.get('/fetch', (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object()
    .keys({
      test: Joi.string().required()
    })
    .error(
      () =>
        'test cannot be empty; e.g., /api/samples/fetch?test=1 will work whereas /api/samples/fetch will returns error message'
    );
  const validationResult = Joi.validate(req.query, schema, {});
  if (validationResult.error) {
    const err = validationResult.error;
    console.error(err);
    next(err);
  }
  sampleFetchService
    .pingOtherApplication()
    .then(resp => {
      res.send(resp && resp.data);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

export const sampleRoutes = router;
