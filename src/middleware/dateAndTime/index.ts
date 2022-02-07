import { Request, Response, NextFunction } from 'express';
import { db } from '../../db';

const getDates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.requestData.query ? req.requestData.query : {};
        res.responseData.sensorValues = await db.getDate(query);
        return next();
    } catch (error) {
        return next(error)
    }
}

export const dateAndTime = {
    getDates
}