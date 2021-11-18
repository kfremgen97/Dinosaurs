// Person class
class Person {
  // Constructor
  constructor(pName, pFeet, pInch, pWeight, pDiet) {
    this.name = pName;
    this.feet = Number(pFeet);
    this.inch = Number(pInch);
    this.weight = Number(pWeight);
    this.diet = pDiet;
  }

  getName() {
    return this.name;
  }

  getHeight() {
    const feet = this.feet;
    const inch = this.inch;
    return { feet, inch};
  }

  getWeight() {
    return this.weight;
  }

  getDiet() {
    return this.diet;
  }

}

// Default export
export default Person;
