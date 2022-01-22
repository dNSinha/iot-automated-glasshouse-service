import { Request, Response, NextFunction } from 'express';
import { db } from '../../db';
import { DevicePaylaod } from '../../types/devicePaylaod';
import { helpers } from '../../utilities/helpers';

const getDevicePayload = (data): any => {
    const payload: DevicePaylaod = {
        humidity: data?.uplink_message?.decoded_payload?.humidity,
        soil_moisture: data?.uplink_message?.decoded_payload?.soil_moisture,
        temperature: data?.uplink_message?.decoded_payload?.temperature,
        water_tank: data?.uplink_message?.decoded_payload?.water_tank,
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

// {date: "2022-01-03", time: "13:46:25"}
// const getDateSensor = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const query = req.requestData.query ? req.requestData.query : {};
//         res.responseData.sensorValues = await db.getSensorValues(query);
//         return next();
//     } catch (error) {
//         return next(error)
//     }
// }

const getSensor = async (req: Request, res: Response, next: NextFunction) => {
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
        const query = req.requestData.query ? req.requestData.query : {};
        res.responseData.sensorValues = await db.getLastSensorValues(query);
        return next();
    } catch (error) {
        return next(error)
    }
}

export const glasshouse = {
    uploadSensor,
    getSensor,
    getLastSensor
}