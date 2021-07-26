/*
Train Table Data:

id - VARCHAR
name - VARCHAR
rollingStockId - VARCHAR
layoutId - VARCHAR
isEngine - BOOLEAN
*/

class Train {
  #id;
  #name;
  #rollingStock;
  #engines;
  #layoutId;

  constructor(id, name, layoutId) {
    this.#id = id;
    this.#name = name;
    this.#rollingStock = [];
    this.#engines = [];
    this.#layoutId = layoutId;
  }

  getId() {
    return this.#id;
  }

  getName() {
    this.#name;
  }

  getRollingStock() {
    return this.#rollingStock;
  }

  getEngines() {
    return this.#engines;
  }

  getLayoutId() {
    return this.#layoutId;
  }

  getTrainLength() {
    let trainLength = 0;

    for (const car of this.getRollingStock()) {
      trainLength += car.getLength();
    }

    for (const engine of this.getEngines()) {
      trainLength += engine.getLength();
    }

    return trainLength;

  }
}

module.exports = Train;
