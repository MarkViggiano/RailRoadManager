/*
Rolling-Stock Table Data:

length - INT (inches)
height - INT (inches)
roadNumber - VARCHAR
layoutId - VARCHAR
*/

class RollingStock {
  #length;
  #height;
  #roadNumber;
  #layoutId;

  constructor(length, height, roadNumber, layoutId) {
    this.#length = length;
    this.#height = height;
    this.#roadNumber = roadNumber;
    this.#layoutId = layoutId;
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

  getLayoutId() {
    return this.#layoutId;
  }

}

module.exports = RollingStock;
