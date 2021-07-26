const mysql = require("mysql");

class DatabaseManager {
  #connection;

  constructor(username, password, host, databaseName) {
    this.#connection = mysql.createConnection({
      host: host,
      user: username,
      password: password,
      database: databaseName
    });
    console.log("[DatabaseManager] Database connection established!")
    this.#initializeTables();
  }

  #initializeTables() {
    this.#connection.query("CREATE TABLE IF NOT EXISTS trains (id VARCHAR(255), name VARCHAR(255), rollingStockId VARCHAR(255), layoutId VARCHAR(255), isEngine BOOLEAN)", (error, result) => {
      console.log("[DatabaseManager] Connected to table: trains");
    });

    this.#connection.query("CREATE TABLE IF NOT EXISTS layouts (scale VARCHAR(255), name VARCHAR(255), id VARCHAR(255))", (error, result) => {
      console.log("[DatabaseManager] Connected to table: layouts");
    });

    this.#connection.query("CREATE TABLE IF NOT EXISTS rollingStock (length INT, height INT, roadNumber VARCHAR(255), layoutId VARCHAR(255))", (error, result) => {
      console.log("[DatabaseManager] Connected to table: rollingStock");
    })

    this.#connection.query("CREATE TABLE IF NOT EXISTS sessions (id VARCHAR(255), name VARCHAR(255), layoutId VARCHAR(255))", (error, result) => {
      console.log("[DatabaseManager] Connected to table: sessions");
    });
  }

}

module.exports = DatabaseManager;
