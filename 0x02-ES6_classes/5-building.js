export default class Building {
  constructor(sqft) {
    if (
      // eslint-disable-next-line operator-linebreak
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
    this._sqft = 0;
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
