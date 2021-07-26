/*
Layouts Table Data:

scale - VARCHAR
name - VARCHAR
id - VARCHAR
*/

class Layout {
  #scale;
  #name;
  #id;
  #rollingstock;

  constructor(id, scale, name) {
    this.#scale = scale;
    this.#name = name;
    this.#id = id;
    this.#rollingstock = [];
  }

  getScale() {
    return this.#scale;
  }

  getId() {
    return this.#id;
  }

  addRollingStock(railObject) {
    this.#rollingstock.append(railObject);
  }

  removeRollingStock(railObject) {
    this.#rollingstock.remove(railObject);
  }

  setRollingStock(rollingStock) {
    this.#rollingstock = rollingStock;
  }

  getRollingStock() {
    return this.#rollingstock;
  }

}

module.exports = Layout;
