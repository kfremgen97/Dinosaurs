// Imports
import Dino from './dinoModel';
import Person from './personModel';

// Revealing module design pattern for dataModel
const dataModel = (function () {
  let person;
  let dinos = [];

  const setPerson = function (name, feet, inch, weight, diet) {
    // Create a new Person via factory function
    const newPerson = Person(name, feet, inch, weight, diet);
    // Set the person property
    person = newPerson;
  };

  const getPerson = function () {
    return person;
  };

  const setDinos = function (dinoArray) {
    const newDinos = dinoArray.map((dino) => {
      return Dino(dino.species, dino.weight, dino.height, dino.diet,
        dino.where, dino.when, dino.fact);
    });
    dinos = newDinos;
  };

  const getDinos = function () {
    return dinos;
  };

  return {
    setPerson,
    getPerson,
    setDinos,
    getDinos,
  };
});

// Export
export default dataModel;
