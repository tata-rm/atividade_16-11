const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const router = require('./routes/rotas');

app.set('port', process.env.PORT);
module.exports = app;
app.use('/api', router);