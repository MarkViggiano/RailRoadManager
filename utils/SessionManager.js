class SessionManager {
  #sessionMap;
  #databaseManager;

  constructor(databaseManager) {
    this.#databaseManager = databaseManager;
    this.#sessionMap = new Map();
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



}