'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

  // Route Imports
  module.exports = (db) => {
   const rides = require("./routes/rides");
    app.use("/api/v1", rides);
    return app;
  }
