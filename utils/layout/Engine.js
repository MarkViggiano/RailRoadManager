const RollingStock = require("./RollingStock");

class Engine extends RollingStock {
  #motorCount;

  constructor(motorCount, length, height, roadNumber) {
    super(length, height, roadNumber);

    this.#motorCount = motorCount;
  }

  getMotorCount() {
    return this.#motorCount;
  }
}

module.exports = Engine;
