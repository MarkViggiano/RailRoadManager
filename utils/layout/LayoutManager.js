import { v4 as uuid } from 'uuid';
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

  static createNewLayout(name, scale) {
    let id = uuid();
    let layout = new Layout(id, scale, name);
    this.addLayout(layout);
    return layout;
  }

  static createNewTrain(name, layoutId) {
    return new Train(uuid(), name, layoutId)
  }

}

module.exports = LayoutManager;
