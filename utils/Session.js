/*
Session Table Data:

id - VARCHAR
name - VARCHAR
layoutId - VARCHAR
*/

class Session {
  #id;
  #name;
  #trains;
  #layoutId;

  constructor(id, name, layoutId) {
    this.#id = id;
    this.#name = name;
    this.#layoutId = layoutId;
    this.#trains = new Map();
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getLayoutId() {
    return this.#layoutId;
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
