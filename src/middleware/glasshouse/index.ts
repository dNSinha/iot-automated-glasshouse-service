import { Request, Response, NextFunction } from 'express';
import { db } from '../../db';
import { DevicePaylaod } from '../../types/devicePaylaod';

const getDevicePayload = (data): any => {
    const payload: DevicePaylaod = {
        humidity: data?.uplink_message?.decoded_payload?.humidity,
        soil_moisture: data?.uplink_message?.decoded_payload?.soil_moisture,
        temperature: data?.uplink_message?.decoded_payload?.temperature,
        water_tank: data?.uplink_message?.decoded_payload?.water_tank,
        received_at: data?.received_at
    };
    return payload;
}


const uploadSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = getDevicePayload(req.requestData.payload);
        res.responseData.sensorUpload = await db.uploadSensorValues(payload);
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