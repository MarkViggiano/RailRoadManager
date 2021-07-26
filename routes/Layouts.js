const Route = require("./Route");

class Layouts extends Route {
  #layoutManager;

  constructor(databaseManager, layoutManager) {
    super(databaseManager);

    this.#layoutManager = layoutManager;
  }

  registerRoutes() {
    this.router.get("/", (req, res) => {
      res.send(this.#layoutManager.getLayoutsAsList());
    })

    this.router.get("/get/:layoutId?", (req, res) => {
      res.send(this.#layoutManager.getLayoutById(req.params.layoutId));
    })
  }

}

module.exports = Layouts;
