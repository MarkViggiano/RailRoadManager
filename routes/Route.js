class Router {
  constructor(databaseManager) {
    this.express = require('express');
    this.router = this.express.Router();
    this.databaseManager = databaseManager;
    this.registerRoutes();
  }

  registerRoutes() {
    console.log(`Neglected to register routes in ${this.constructor.name} Class! Modify the method: registerRoutes`);
  }

}

module.exports = Router;
