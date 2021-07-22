const mysql = require("mysql");

class DatabaseManager {
  #username;
  #password;
  #host;
  #databaseName;
  #connection;

  constructor(username, password, host, databaseName) {
    this.#username = username;
    this.#password = password;
    this.#host = host;
    this.#databaseName = databaseName;
    this.#connection = mysql.createConnection({
      host: this.host,
      user: this.username,
      password: this.password,
      database: this.database
    });
  }
}

module.exports = DatabaseManager;
