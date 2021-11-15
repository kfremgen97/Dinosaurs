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

  const compareHeight = function (humanName, humanHeight) {
    // Get the human height in inches
    const humanInches = (humanHeight.feet * 12) + humanHeight.inch;

    // Check for human less than, greater than, or same height as dino
    if (height > humanInches) {
      return `${species} is ${(height / humanInches).toFixed(2)} times taller than ${humanName}`;
    }
    if (humanInches > height) {
      return `${humanName} is ${(humanInches / height).toFixed(2)} times taller than ${species}`;
    }
    return `${humanName} and ${species} are the same height`;
  };

  const compareWeight = function (humanName, humanWeight) {
    // Check for human less than, greater than, or same weight as dino
    if (weight > humanWeight) {
      return `${species} is ${(weight / humanWeight).toFixed(2)} times heavier than ${humanName}`;
    }
    if (humanWeight > weight) {
      return `${humanName} is ${(humanWeight / weight).toFixed(2)} times heavier than ${species}`;
    }
    return `${humanName} and ${species} are the same weight`;
  };

  const compareDiet = function (humanName, humanDiet) {
    // Compare diets
    if (humanDiet === diet) return `${humanName} and ${species} are both ${humanDiet}`;
    return `${humanName} is a(n) ${humanDiet},while ${species} is a(n) ${diet}`;
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
    compareHeight,
    compareWeight,
    compareDiet,
  };
};

// Export Dino function
export default Dino;
