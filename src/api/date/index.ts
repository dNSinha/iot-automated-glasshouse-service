import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { helpers } from '../../utilities/helpers';

const router = express.Router({ mergeParams: true });

// TODO: Change name of route after device
router.route('/').get((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, {});
    res.responseData = Object.assign({}, {});
    next();
});

export const dateRouter = router;
