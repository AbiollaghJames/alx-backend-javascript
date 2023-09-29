export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  set students(vals) {
    if (!Array.isArray(vals)) {
      throw new TypeError('Students must be an array of string');
    }
    if (!vals.every((val) => typeof val === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = vals;
  }
}
