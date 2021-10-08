require('dotenv/config');
require('express-async-errors');
const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3001, () => console.log('> Server Started at http://localhost:3001'));
