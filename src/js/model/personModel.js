// Constructor function
const Person = function (name, feet, inch, weight, diet) {
  // eslint-disable-next-line no-underscore-dangle
  this._name = name;
  this._feet = feet;
  this._inch = inch;
  this._weight = weight;
  this._diet = diet;
};

// Prototype methods so all instances have access via __proto__ property due to prototype chain

Person.prototype.getName = function () {
  return this._name;
};

Person.prototype.getHeight = function () {
  return {
    feet: this._feet,
    inch: this._inch,
  };
};

Person.prototype.getWeight = function () {
  return this._weight;
};

Person.prototype.getDiet = function () {
  return this._diet;
};

Person.prototype.getName = function () {
  return this._name;
};

// Default export
export default Person;
