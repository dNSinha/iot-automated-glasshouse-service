import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router({ mergeParams: true });

// TODO: Change name of route after device
router.route('/lora').post((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, { payload: req.body });
    res.responseData = Object.assign({}, {});
    next();
});

export const deviceRouter = router;
