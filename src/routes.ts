import express from 'express';

import ItemsControllers from './controllers/itemsController';
import PointControllers from './controllers/pointsController';

const routes = express.Router();
const itemsController = new ItemsControllers();
const pointsControllers = new PointControllers();

routes.get('/items', itemsController.index);

routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);
routes.post('/points', pointsControllers.create);

export default routes;