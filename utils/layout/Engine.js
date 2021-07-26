const RollingStock = require("./RollingStock");

class Engine extends RollingStock {
  #motorCount;

  constructor(motorCount, length, height, roadNumber, layoutId) {
    super(length, height, roadNumber, layoutId);

    this.#motorCount = motorCount;
  }

  getMotorCount() {
    return this.#motorCount;
  }
}

module.exports = Engine;
