import { Router } from 'express';

import UserController from './app/controllers/UserController';
import StarController from './app/controllers/StarController';

const routes = Router();

// create user
routes.post('/users', UserController.store);

// give stars
routes.put('/stars/give', StarController.update);

export default routes;
