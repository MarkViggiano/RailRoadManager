const Route = require("./Route");

class Sessions extends Route {
  constructor(databaseManager, sessionManager) {
    super(databaseManager);

    this.sessionManager = sessionManager;
  }

  registerRoutes() {
    this.router.get("/", (req, res) => {
      res.send("login page!");
    })
  }

}

module.exports = Sessions;
