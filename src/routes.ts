import express from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate';

import multerConfig from './config/multer';
import ItemsControllers from './controllers/itemsController';
import PointControllers from './controllers/pointsController';

const routes = express.Router();
const upload = multer(multerConfig);
const itemsController = new ItemsControllers();
const pointsControllers = new PointControllers();

routes.get('/items', itemsController.index);

routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);
routes.post('/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsControllers.create
);

export default routes;