const express = require('express');
const router = express.Router();

class Router {
  constructor(databaseManager) {
    this.databaseManager = databaseManager;
  }
}

module.exports = Router;
