import express from 'express';
import { formattedResponse } from '../middleware/formattedResponse';
import { pingRoutes } from './ping';
import { sampleRoutes } from './samples';
import { deviceRouter } from './device';
import { glasshouse } from '../db/glasshouse'; 

const router = express.Router({ mergeParams: true });
router.use('/ping', pingRoutes, formattedResponse);
router.use('/device', deviceRouter, glasshouse, formattedResponse);
router.use('/samples', sampleRoutes);

export const routes = router;
