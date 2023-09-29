export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(val) {
    this._brand = val;
  }

  set motor(val) {
    this._motor = val;
  }

  set color(val) {
    this._color = val;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
