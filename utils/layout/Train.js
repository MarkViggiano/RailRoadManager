class Train {
  #name;
  #cars;
  #engines;

  constructor(name) {
    this.#name = name;
    this.#cars = [];
    this.#engines = [];
  }

  getName() {
    this.#name;
  }

  getCars() {
    return this.#cars;
  }

  getEngines() {
    return this.#engines;
  }

  getTrainLength() {
    let trainLength = 0;

    for (const car of this.getCars()) {
      trainLength += car.getLength();
    }

    for (const engine of this.getEngines()) {
      trainLength += engine.getLength();
    }

    return trainLength;

  }
}

module.exports = Train;
