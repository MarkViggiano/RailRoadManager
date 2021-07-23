class Layout {
  #scale;
  #rollingstock;

  constructor(scale, rollingstock) {
    this.#scale = scale;
    this.#rollingstock = rollingstock;
  }

  getScale() {
    return this.#scale;
  }

  getRollingStock() {
    return this.#rollingstock;
  }

}

module.exports = Layout;
