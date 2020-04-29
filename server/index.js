'use strict';

const express = require('express');
const cors = require('cors');

const commonRouter = require('./src/routers/common');
const krakenRouter = require('./src/routers/kraken');
const stellarRouter = require('./src/routers/stellar');

const app = express();
const port = 3030;

// custom middleware to log requests to console for every endpoint
app.use((req, res, next) => {
  console.log('\n-------------------------------------');
  console.log(`\nReceived request.`);
  console.log("\x1b[36m", "URI: ", "\x1b[37m", req.originalUrl)
  console.log("\x1b[36m", "Method: ", "\x1b[37m", req.method)

  next();
});

// error handling middleware
app.use((error, req, res, next) => {
  console.error("URI: ", req.originalUrl);
  console.error("Method: ", req.method);
  console.error("Status Code: ", error.statusCode);
  console.error("Error Message:", error.error.message);

  res.status(500).send();
});

// set server to work with json
app.use(express.json());

// register routers
app.use(commonRouter);
app.use(krakenRouter);
app.use(stellarRouter);

app.use(cors);

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));