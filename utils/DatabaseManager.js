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
    console.log("[DatabaseManager] Database connection established!");
    this.#initializeTables();
  }

  #initializeTables() {
    this.#connection.query("CREATE TABLE IF NOT EXISTS trains (id VARCHAR(255), name VARCHAR(255), rollingStockId VARCHAR(255), layoutId VARCHAR(255), isEngine BOOLEAN)", (error, result) => {
      if (error) throw error;
      console.log("[DatabaseManager] Connected to table: trains");
    });

    this.#connection.query("CREATE TABLE IF NOT EXISTS layouts (scale VARCHAR(255), name VARCHAR(255), id VARCHAR(255))", (error, result) => {
      if (error) throw error;
      console.log("[DatabaseManager] Connected to table: layouts");
    });

    this.#connection.query("CREATE TABLE IF NOT EXISTS rollingStock (length INT, height INT, roadNumber VARCHAR(255), layoutId VARCHAR(255))", (error, result) => {
      if (error) throw error;
      console.log("[DatabaseManager] Connected to table: rollingStock");
    })

    this.#connection.query("CREATE TABLE IF NOT EXISTS sessions (id VARCHAR(255), name VARCHAR(255), layoutId VARCHAR(255))", (error, result) => {
      if (error) throw error;
      console.log("[DatabaseManager] Connected to table: sessions");
    });
  }

  /*
  ================
  Layout
  ================
  */

  saveNewLayout(layout) {
    let scale = layout.getScale();
    let name = layout.getName();
    let id = layout.getId();
    //final mysql check to make sure there's no duplicate layouts
    this.#connection.query("IF NOT EXISTS (SELECT * FROM layouts WHERE name=?) BEGIN INSERT INTO layouts (scale, name, id) VALUES (?, ?, ?)", [scale, name, id], (error, result) => {
      if (error) throw error;
      console.log(`[DatabaseManager] Saved new layout: ${name}`);
    });
  }

  updateLayoutInformation(layout) {
    let scale = layout.getScale();
    let name = layout.getName();
    let id = layout.getId();
    //no need to do checks because this function will never be called on a new layout since on creation of layouts they are saved
    this.#connection.query("UPDATE layouts SET scale=?, name=? WHERE id=?", [scale, name, id], (error, result) => {
      if (error) throw error;
      console.log(`[DatabaseManager] Updated layout: ${name}`);
    });
  }

  deleteLayout(layout) {
    let scale = layout.getScale();
    let name = layout.getName();
    let id = layout.getId();
  }

  /*
  ================
  Session
  ================
  */

  saveNewSession(session) {
    let id = session.getId();
    let name = session.getName();
    let layoutId = session.getLayoutId();
    //final mysql check to ensure no duplicate sessions
    this.#connection.query("IF NOT EXISTS (SELECT * FROM sessions WHERE name=?) BEGIN INSERT INTO sessions (id, name, layoutId) VALUES (?, ?, ?)", [id, name, layoutId], (error, result) => {
      if (error) throw error;
      console.log(`[DatabaseManager] Saved session: ${session}`);
    });
  }

}

module.exports = DatabaseManager;
