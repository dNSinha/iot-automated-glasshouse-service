import { Request, Response, NextFunction } from 'express';
import { db } from '../../db';


const uploadSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.responseData.sensorUpload = await db.uploadSensorValues(req.body);
        return next();
    } catch (error) {
        return next(error)
    }
}

const getSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.responseData.sensorValues = await db.getSensorValues();
        return next();
    } catch (error) {
        return next(error)
    }
}

export const glasshouse = {
    uploadSensor,
    getSensor
}