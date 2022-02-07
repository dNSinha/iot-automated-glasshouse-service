import express from 'express';
import { formattedResponse } from '../middleware/formattedResponse';
import { pingRoutes } from './ping';
import { deviceRouter } from './device';
import { sensorRouter } from './sensor';
import { sensorNowRouter } from './sensorNow';
import { dateRouter } from './date';
import { glasshouse } from '../middleware/glasshouse';
import { dateAndTime } from '../middleware/dateAndTime';

const router = express.Router({ mergeParams: true });
router.use('/ping', pingRoutes, formattedResponse);
router.use('/device', deviceRouter, glasshouse.uploadSensor, formattedResponse);
router.use('/sensor', sensorRouter, glasshouse.getTimedSensor, formattedResponse);
router.use('/sensorNow', sensorNowRouter, glasshouse.getLastSensor, formattedResponse);
router.use('/date', dateRouter, dateAndTime.getDates, formattedResponse);

export const routes = router;
