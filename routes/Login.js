const Route = require("./Route");

class Login extends Route {
  constructor(databaseManager) {
    super(databaseManager);
  }

  registerRoutes() {
    this.router.get("/", (req, res) => {
      res.send("login page!");
    })
  }

}

module.exports = Login;
