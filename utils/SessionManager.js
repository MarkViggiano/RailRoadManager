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

}

module.exports = SessionManager;
