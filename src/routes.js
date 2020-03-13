import { Router } from 'express';

import UserController from './app/controllers/UserController';
import StarController from './app/controllers/StarController';

const routes = Router();

// create user
routes.post('/users', UserController.store);

// create (give) stars
routes.post('/stars/give', StarController.store);
// list stars history
routes.get('/stars/history/:username', StarController.index);

export default routes;
