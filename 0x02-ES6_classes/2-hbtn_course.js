export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get getName() {
    return this._name;
  }

  get getLength() {
    return this._length;
  }

  get getStudents() {
    return this._students;
  }

  set setName(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  set setLength(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  set setStudents(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    this._students = val;
  }
}
