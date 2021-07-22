class Session {
  #id;
  #name;
  #trains;

  constructor(id, name) {
    this.#name = name;
    this.#id = id;
    this.#trains = new Map();
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
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
    for (const [key, value] of Object.entries(this.trains)) {
      trains.append(value);
    }
    return trains;
  }

}
