const mysql = require("mysql");

class DatabaseManager {
  constructor(username, password, host, databaseName) {
    this.username = username;
    this.password = password;
    this.host = host;
    this.databaseName = databaseName;
  }
}

module.exports = DatabaseManager;
