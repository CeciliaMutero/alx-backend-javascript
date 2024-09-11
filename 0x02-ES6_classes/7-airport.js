export default class Airport {
  constructor(name, code) {
    this._name = '';
    this._code = '';

    this.name = name;
    this.code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
