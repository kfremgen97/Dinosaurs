// Below we use a factory function
// A factory function is a function that returns an object, but isn't itself a class or constructor
// As such, we invoke a factory function as a normal function without using the new operator
// Using a factory function, we can  encapsulate data to hide properties and methods as we wish

const Person = function (pName, pFeet, pInch, pWeight, pDiet) {
  // Properties
  const name = pName;
  const feet = Number(pFeet);
  const inch = Number(pInch);
  const weight = Number(pWeight);
  const diet = pDiet;

  // Methods
  const getName = function () {
    return name;
  };

  const getHeight = function () {
    return {
      feet,
      inch,
    };
  };

  const getWeight = function () {
    return weight;
  };

  const getDiet = function () {
    return diet;
  };

  // Return and object with the methods we want to allow to be public
  // This will keep the properties private but the methods can still access them via closure
  return {
    getName,
    getHeight,
    getWeight,
    getDiet,
  };
};

// Default export
export default Person;
