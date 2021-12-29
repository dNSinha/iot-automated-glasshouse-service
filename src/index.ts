import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './api';
import swaggerUi from 'swagger-ui-express';
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');
// import { connectDB } from './db';


const app = () => {
  const app = express();  
  app.use(bodyParser.json());
  
  // connectDB();
  
  app.use('/api', routes);
  if (process.env.ENABLE_SWAGGER === 'true')
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
  return app;
};

export default app;
