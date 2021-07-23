const Route = require("./Route");

class Sessions extends Route {
  #sessionManager;

  constructor(databaseManager, sessionManager) {
    super(databaseManager);

    this.#sessionManager = sessionManager;
  }

  registerRoutes() {
    this.router.get("/", (req, res) => {
      res.send(this.#sessionManager.getSessionsAsList());
    })

    this.router.get("/get/:sessionId?", (req, res) => {
      res.send(this.#sessionManager.getSessionById(req.params.sessionId));
    })
  }

}

module.exports = Sessions;
