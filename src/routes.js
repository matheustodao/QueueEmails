const { Router } = require('express');

const vtexProductController = require('./App/controllers/vtexProductController');

const routes = Router();

routes.post('/products', vtexProductController.store);

module.exports = routes;
