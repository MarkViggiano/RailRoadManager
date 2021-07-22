class Session {
  #id;
  #name;
  #trains;
  #layout;

  constructor(id, name, layout) {
    this.#id = id;
    this.#name = name;
    this.#layout = layout;
    this.#trains = new Map();
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getLayout() {
    return this.#layout;
  }

  getTrainById(id) {
    return this.#trains.get(id);
  }

  addTrain(train) {
    this.#trains.set(train.id, train);
  }

  removeTrain(train) {
    this.#trains.delete(trains.id);
  }

  getTrainsAsList() {
    let trains = [];
    for (const [key, value] of Object.entries(this.#trains)) {
      trains.append(value);
    }
    return trains;
  }

}

module.exports = Session;
