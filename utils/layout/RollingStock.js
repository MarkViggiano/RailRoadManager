class RollingStock {
  #length;
  #height;
  #roadNumber;

  constructor(length, height, roadNumber) {
    this.#length;
    this.#height;
    this.#roadNumber = roadNumber;
  }

  getLength() {
    return this.#length;
  }

  getHeight() {
    return this.#height;
  }

  getRoadNumber() {
    return this.#roadNumber;
  }
}

module.exports = RollingStock;
