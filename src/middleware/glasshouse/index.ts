import { Request, Response, NextFunction } from 'express';
import { db } from '../../db';
import { DevicePaylaod } from '../../types/devicePaylaod';
import { helpers } from '../../utilities/helpers';

const getDevicePayload = (data): any => {
    const payload: DevicePaylaod = {
        avg_soil_moisture: data?.uplink_message?.decoded_payload?.avg_soil_moisture,
        soil_moisture1: data?.uplink_message?.decoded_payload?.soil_moisture1,
        soil_moisture2: data?.uplink_message?.decoded_payload?.soil_moisture2,
        soil_moisture3: data?.uplink_message?.decoded_payload?.soil_moisture3,
        humidity: data?.uplink_message?.decoded_payload?.humidity,
        temperature: data?.uplink_message?.decoded_payload?.temperature,
        water_tank: data?.uplink_message?.decoded_payload?.water_tank,
        light: data?.uplink_message?.decoded_payload?.light,
        date: helpers.getDate(data?.received_at),
        time: helpers.getTime(data?.received_at)
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

const getTimedSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.requestData.query ? req.requestData.query : {};
        res.responseData.sensorValues = await db.getSensorValues(query);
        return next();
    } catch (error) {
        return next(error)
    }
}

const getLastSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.responseData.sensorValues = await db.getLastSensorValues();
        return next();
    } catch (error) {
        return next(error)
    }
}

export const glasshouse = {
    uploadSensor,
    getTimedSensor,
    getLastSensor
}