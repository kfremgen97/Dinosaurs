// Below we use a factory function
// A factory function is a function that returns an object, but isn't itself a class or constructor
// As such, we invoke a factory function as a normal function without using the new operator
// Using a factory function, we can  encapsulate data to hide properties and methods as we wish
const Dino = function (
  dinoSpecies, dinoWeight, dinoHeight, dinoDiet,
  dinoWhere, dinoWhen, dinoFact,
) {
  // Properties
  const species = dinoSpecies;
  const weight = dinoWeight;
  const height = dinoHeight;
  const diet = dinoDiet;
  const where = dinoWhere;
  const when = dinoWhen;
  const fact = dinoFact;

  // Methods
  const getSpecies = function () {
    return species;
  };

  const getWeight = function () {
    return weight;
  };

  const getHeight = function () {
    return height;
  };

  const getDiet = function () {
    return diet;
  };

  const getWhere = function () {
    return where;
  };

  const getWhen = function () {
    return when;
  };

  const getFact = function () {
    return fact;
  };

  // Return and object with the methods we want to allow to be public
  // This will keep the properties private but the methods can still access them via closure
  return {
    getSpecies,
    getHeight,
    getWeight,
    getDiet,
    getWhere,
    getWhen,
    getFact,
  };
};

// Export Dino function
export default Dino;
