import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './api';
import swaggerUi from 'swagger-ui-express';
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');
import { db } from './db';


const app = () => {
  const app = express();
  app.use(bodyParser.json());

  db.init();
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use('/api', routes);
  if (process.env.ENABLE_SWAGGER === 'true')
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
  return app;
};

export default app;
