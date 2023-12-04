class EquipmentBoard {
  modelName;
  brand;
  length;
  type;

  constructor(modelName, brand, length, type) {
    this.modelName = modelName;
    this.brand = brand;
    this.length = length;
    this.type = type;
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
