const { uuid } = require("uuid");
const Session = require("./Session");

class SessionManager {
  #sessionMap;
  #databaseManager;

  constructor(databaseManager) {
    this.#databaseManager = databaseManager;
    this.#sessionMap = new Map();
    console.log("SessionManager created!");
  }

  getSessionById(id) {
    return this.#sessionMap.get(id);
  }

  addSession(session) {
    this.#sessionMap.set(session.id, session)
  }

  removeSessionById(id) {
    this.#sessionMap.delete(id);
  }

  removeSession(session) {
    this.removeSessionById(session.id);
  }

  getSessionsAsList() {
    let sessions = [];
    for (const [key, value] of Object.entries(this.#sessionMap)) {
      sessions.append(value);
    }

    return sessions;
  }

  createNewSession(name, layoutId) {
    //check in-memory for duplicate names
    let sessions = this.getSessionsAsList();
    for (const session of sessions) {
      if (session.getName().toLowerCase() == name.toLowerCase()) return null;
    }

    let session = new Session(uuid(), name, layoutId);
    this.#databaseManager.saveNewSession(session);
    return session;
  }

}

module.exports = SessionManager;
