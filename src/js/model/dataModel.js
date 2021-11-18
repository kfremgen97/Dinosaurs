// Imports
import Dino from './dinoModel';
import Person from './personModel';

// Data Model class
class DataModel {
  // Constructor
  constructor() {
    this.person = {};
    this.dinos = [];
  }

  setPerson(name, feet, inch, weight, diet) {
    // Create a new Person via factory function
    const newPerson = new Person(name, feet, inch, weight, diet);
    // Set the person property
    this.person = newPerson;
  }

  getPerson() {
    return this.person;
  }

  setDinos(dinoArray) {
    const newDinos = dinoArray.map((dino) => {
      return new Dino(dino.species, dino.weight, dino.height, dino.diet,
        dino.where, dino.when, dino.fact);
    });
    this.dinos = newDinos;
  }

  getDinos() {
    return this.dinos;
  }

}

// Export
export default new DataModel();
