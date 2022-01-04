import express from 'express';
import { formattedResponse } from '../middleware/formattedResponse';
import { pingRoutes } from './ping';
import { deviceRouter } from './device';
import { sensorRouter } from './sensor';
import { glasshouse } from '../middleware/glasshouse';

const router = express.Router({ mergeParams: true });
router.use('/ping', pingRoutes, formattedResponse);
router.use('/device', deviceRouter, glasshouse.uploadSensor, formattedResponse);
router.use('/sensor', sensorRouter, glasshouse.getSensor, formattedResponse);

export const routes = router;
