class EquipmentBoard {
  modelName; // This would a class and it's a composition: An equipment boards needs a model name
  brand;
  length;
  type;
  _internalTypeOfMaterial; // Association - loosely coupled and independent: An equipment board knows internal material
  #core = 'awdad'; // Aggregation - coupled and dependent: An equipment board has a core

  constructor(modelName, brand, length, type) {
    this.modelName = modelName;
    this.brand = brand;
    this.length = length;
    this.type = type;
    this.#core = 'awdad';
  }

  get modelName() {
    return this.modelName;
  }
  get brand() {
    return this.brand;
  }
  get length() {
    return this.length;
  }
  get type() {
    return this.type;
  }

  get info() {
    return `The board ${this.modelName} from ${this.brand} is ${this.length} long and is a ${this.type} board`;
  }
}

module.exports = EquipmentBoard;
