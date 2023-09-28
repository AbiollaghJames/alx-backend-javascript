class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;

    if (Array.isArray(students)) {
      this._students = students;
    }
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
    this._name = val;
  }

  set setLength(val) {
    this._length = val;
  }

  set setStudents(val) {
    this._students = val;
  }
}
