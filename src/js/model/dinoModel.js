// Dino class
class Dino {

  // Constructor
  constructor(dinoSpecies, dinoWeight, dinoHeight, dinoDiet,
              dinoWhere, dinoWhen, dinoFact) {
    // Properties
    this.species = dinoSpecies;
    this.weight = dinoWeight;
    this.height = dinoHeight;
    this.diet = dinoDiet;
    this.where = dinoWhere;
    this.when = dinoWhen;
    this.fact = dinoFact;
  }

  // Methods
  getSpecies() {
    return this.species;
  }

  getWeight() {
    return this.weight;
  }

  getHeight() {
    return this.height;
  }

  getDiet() {
    return this.diet;
  }

  getWhere() {
    return this.where;
  }

  getWhen() {
    return this.when;
  }

  getFact() {
    return this.fact;
  }

  compareHeight(humanName, humanHeight) {
    // Get the human height in inches
    const humanInches = (humanHeight.feet * 12) + humanHeight.inch;

    // Check for human less than, greater than, or same height as dino
    if (this.height > humanInches) {
      return `${this.species} is ${(this.height / humanInches).toFixed(2)} times taller than ${humanName}`;
    }
    if (humanInches > this.height) {
      return `${humanName} is ${(humanInches / this.height).toFixed(2)} times taller than ${this.species}`;
    }
    return `${humanName} and ${this.species} are the same height`;
  }

  compareWeight(humanName, humanWeight) {
    // Check for human less than, greater than, or same weight as dino
    if (this.weight > humanWeight) {
      return `${this.species} is ${(this.weight / humanWeight).toFixed(2)} times heavier than ${humanName}`;
    }
    if (humanWeight > this.weight) {
      return `${humanName} is ${(humanWeight / this.weight).toFixed(2)} times heavier than ${this.species}`;
    }
    return `${humanName} and ${this.species} are the same weight`;
  }

  compareDiet(humanName, humanDiet) {
    // Compare diets
    if (humanDiet === this.diet) return `${humanName} and ${this.species} are both ${humanDiet}`;
    return `${humanName} is a(n) ${humanDiet},while ${this.species} is a(n) ${this.diet}`;
  }
}

// Export Dino
export default Dino;
