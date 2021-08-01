const { uuid } = require("uuid");
const Layout = require("./Layout");
const Train = require("./Train")

class LayoutManager {
  #layoutMap;
  #databaseManager;

  constructor(databaseManager) {
    this.#databaseManager = databaseManager;
    this.#layoutMap = new Map();
    console.log("LayoutManager created!");
  }

  getLayoutById(id) {
    return this.#layoutMap.get(id);
  }

  addLayout(layout) {
    this.#layoutMap.set(layout.id, layout)
  }

  removeLayoutById(id) {
    this.#layoutMap.delete(id);
  }

  removeLayout(layout) {
    this.removeLayoutById(layout.id);
  }

  getLayoutsAsList() {
    let layouts = [];
    for (const [key, value] of Object.entries(this.#layoutMap)) {
      layouts.append(value);
    }

    return layouts;
  }

  createNewLayout(name, scale) {
    //check in-memory for duplicate names
    let layouts = this.getLayoutsAsList();
    for (const layout of layouts) {
      if (layout.getName().toLowerCase() == name.toLowerCase()) return null;
    }

    let layout = new Layout(uuid(), scale, name);
    this.addLayout(layout);
    this.#databaseManager.saveNewLayout(layout);
    return layout;
  }

  createNewTrain(name, layoutId) {
    return new Train(uuid(), name, layoutId)
  }

}

module.exports = LayoutManager;
