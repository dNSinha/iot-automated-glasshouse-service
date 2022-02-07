import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { helpers } from '../../utilities/helpers';

const router = express.Router({ mergeParams: true });

// TODO: Change name of route after device
router.route('/complete').get((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, {});
    res.responseData = Object.assign({}, {});
    next();
});

router.route('/timed').post((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, {query: {}, payload: req.body});
    res.responseData = Object.assign({}, {});
    req.requestData.query = helpers.generateDateTimeQuery(req.requestData.payload);
    next();
});

router.route('/dated').post((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, {query: {}, payload: req.body});
    res.responseData = Object.assign({}, {});
    req.requestData.query = helpers.generateDateQuery(req.requestData.payload);
    next();
});

export const sensorRouter = router;
