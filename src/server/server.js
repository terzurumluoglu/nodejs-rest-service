const express = require('express');
const connectDB = require('../config/db');
const server = express();
server.use(express.json());
connectDB();

module.exports = server;
