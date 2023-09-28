export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = val;
  }

  if (this.constructor !== Building) {
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }
}
